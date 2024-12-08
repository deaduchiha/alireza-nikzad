export const runtime = "edge";

export async function GET(request: Request) {
  return Response.json({
    here: "we go again ;D",
  });
}
