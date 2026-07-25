export async function GET() {
  const response = await fetch("https://api.printful.com/store/products", {
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_TOKEN}`,
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    return Response.json(data, { status: response.status });
  }

  return Response.json(data.result);
}