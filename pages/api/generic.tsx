/* eslint-disable */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

const font = fetch(
  new URL("../../public/static/montserrat-bold-font.otf", import.meta.url)
).then(res => res.arrayBuffer());

export default async function handler() {
  const fontData = await font;

  try {
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "flex-end",
            gap: "49px",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            padding: "86px 114px 43px 114px",
          }}
        >
          <div
            style={{
              backgroundColor: "#F9F9F9",
              width: "972px",
              height: "386px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "nowrap",
              gap: "60px",
              border: "1px solid #F3F6FF",
              borderRadius: "50px",
              boxShadow:
                "1px 2px 1px rgba(120, 127, 150, 0.03), 1px 4px 3px rgba(120, 127, 150, 0.05), 0px 1px 0px rgba(106, 112, 255, 0.12), 0px 8px 4px rgba(102, 95, 136, 0.03)",
            }}
          >
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "nowrap",
                letterSpacing: "0.3px",
              }}
            >
              <span
                style={{
                  fontWeight: 800,
                  color: "#1E202D",
                  fontSize: "100px",
                  fontFamily: "Typewriter",
                }}
              >
                ditto
              </span>
              <span
                style={{
                  fontWeight: 800,
                  fontFamily: "Typewriter",
                  color: "#1d96ef",
                  fontSize: "100px",
                }}
              >
                .
              </span>
              <span
                style={{
                  fontWeight: 800,
                  fontFamily: "Typewriter",
                  color: "#1E202D",
                  fontSize: "100px",
                }}
              >
                jobs
              </span>
            </div>
            <div
              style={{
                width: "280px",
                height: "78.5px",
                borderRadius: "23px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.14)",
                backgroundColor: "#1E96F2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "28px",
                fontFamily: "Typewriter",
                fontWeight: 800,
              }}
            >
              Get Hired!
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              marginRight: "32px",
            }}
          >
            <span
              style={{
                fontWeight: 800,
                color: "#000000",
                fontSize: "70px",
                fontFamily: "Typewriter",
                position: "relative",
              }}
            >
              d
            </span>
            <span
              style={{
                fontWeight: 800,
                backgroundColor: "#1E96F2",
                fontSize: "70px",
                fontFamily: "Typewriter",
                width: "19px",
                height: "19px",
                borderRadius: "100%",
                position: "absolute",
                right: "-1.1rem",
                bottom: "1.3rem",
              }}
            />
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
