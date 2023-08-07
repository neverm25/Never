/* eslint-disable */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

const font = fetch(
  new URL("../../public/static/montserrat-bold-font.otf", import.meta.url)
).then(res => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;

  try {
    const { searchParams } = req.nextUrl;

    const hasCompanyName = searchParams.has("companyName");
    const companyName = hasCompanyName
      ? searchParams.get("companyName")
      : "Ditto Jobs";

    const hasCompanylogo = searchParams.has("companyLogo");
    const companyLogo = hasCompanylogo
      ? searchParams.get("companyLogo")
      : "https://web.ditto.jobs/storage/ograph.png";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "#ffffff",
            minHeight: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#F9F9F9",
                width: "1050px",
                minHeight: "333px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "flex-start",
                flexWrap: "nowrap",
                border: "1px solid #F3F6FF",
                borderRadius: "50px",
                gap: "65px",
                padding: "60px 100px 73px 50px",
                margin: "55px 75px 50px 75px",
                boxShadow:
                  "1px 2px 1px rgba(120, 127, 150, 0.03), 1px 4px 3px rgba(120, 127, 150, 0.05), 0px 1px 0px rgba(106, 112, 255, 0.12), 0px 8px 4px rgba(102, 95, 136, 0.03)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  background: `url(${companyLogo})`,
                  width: "200px",
                  height: "200px",
                  borderRadius: "10px",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div
                style={{
                  fontSize: `${companyName?.length <= 19 ? "48px" : "44px"}`,
                  color: "#4D5D75",
                  textAlign: "start",
                  fontFamily: "Typewriter",
                  fontWeight: 800,
                }}
              >
                {companyName}
              </div>
            </div>
            <div
              style={{
                width: "280px",
                minHeight: "87.5px",
                borderRadius: "23px",
                backgroundColor: "#1E96F2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "28px",
                letterSpacing: "0.3px",
                fontWeight: 800,
                fontFamily: "Typewriter",
                boxShadow:
                  "0px 4px 3px -3px rgba(0, 0, 0, 0.1), inset 0px 2px 2px rgba(255, 255, 255, 0.55), inset 0px -1px 3px 1px rgba(0, 0, 0, 0.2)",
              }}
            >
              Learn More
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              margin: "26.5px 0px 30px 35px",
            }}
          >
            <span
              style={{
                fontWeight: 800,
                color: "#1E202D",
                fontSize: "40px",
                fontFamily: "Typewriter",
                letterSpacing: "0.3px",
              }}
            >
              ditto
            </span>
            <span
              style={{
                fontWeight: 800,
                color: "#1E96F2",
                fontSize: "40px",
                letterSpacing: "0.3px",
                fontFamily: "Typewriter",
              }}
            >
              .
            </span>
            <span
              style={{
                fontWeight: 800,
                color: "#1E202D",
                fontSize: "40px",
                fontFamily: "Typewriter",
                letterSpacing: "0.3px",
              }}
            >
              jobs
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Typewriter",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e) {
    console.log(e.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
