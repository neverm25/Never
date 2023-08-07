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

    const hasCity = searchParams.has("city");
    const city = searchParams.get("city");

    const hasjobTitle = searchParams.has("jobTitle");
    const jobTitle = hasjobTitle
      ? searchParams.get("jobTitle")
      : "React Js Developer";

    const hasCompanylogo = searchParams.has("companyLogo");
    const companyLogo = hasCompanylogo
      ? searchParams.get("companyLogo")
      : "https://web.ditto.jobs/storage/ograph.png";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            minHeight: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
            padding: "75px 75px 37px",
          }}
        >
          <div
            style={{
              backgroundColor: "#F9F9F9",
              height: "430px",
              width: "1050px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "65px 65px 48.5px 65px",
              borderRadius: "50px",
              gap: "80px",
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
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: "70%",
                  gap: "40px",
                }}
              >
                <div
                  style={{
                    fontSize: "36px",
                    color: "#1E96F2",
                    textAlign: "start",
                    fontWeight: 800,
                    fontFamily: "Typewriter",
                  }}
                >
                  {jobTitle}
                </div>
                {hasCity && (
                  <div
                    style={{
                      fontSize: "36px",
                      color: "#000000",
                      fontWeight: 700,
                      fontFamily: "Typewriter",
                    }}
                  >
                    {city}
                  </div>
                )}
              </div>
              <div
                style={{
                  width: "280px",
                  minHeight: "87.5px",
                  borderRadius: "23px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.14)",
                  backgroundColor: "#1E96F2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontSize: "28px",
                  fontFamily: "Typewriter",
                  fontWeight: 800,
                }}
              >
                Apply Now
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: "40px",
              letterSpacing: "0.3px",
            }}
          >
            <span
              style={{
                fontWeight: 800,
                color: "#000000",
                fontSize: "40px",
                fontFamily: "Typewriter",
              }}
            >
              ditto
            </span>
            <span
              style={{
                fontWeight: 800,
                color: "#1d96ef",
                fontSize: "40px",
                fontFamily: "Typewriter",
              }}
            >
              .
            </span>
            <span
              style={{
                fontWeight: 800,
                color: "#000000",
                fontSize: "40px",
                fontFamily: "Typewriter",
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
