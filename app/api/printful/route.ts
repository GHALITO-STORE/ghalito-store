export async function GET() {
  try {
    const response = await fetch(
      "https://api.printful.com/store/products",
      {
        headers: {
          Authorization: `Bearer ${process.env.PRINTFUL_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json(data, { status: response.status });
    }

    const products = await Promise.all(
      data.result.map(async (product: any) => {
        const detailsResponse = await fetch(
          `https://api.printful.com/store/products/${product.id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.PRINTFUL_TOKEN}`,
            },
            cache: "no-store",
          }
        );

        const details = await detailsResponse.json();

        const firstVariant =
          details.result.sync_variants?.[0] ||
          details.result.sync_product?.variants?.[0];

        return {
          id: product.id,
          name: product.name,
          thumbnail_url: product.thumbnail_url,
          variants: product.variants,
          price: firstVariant?.retail_price ?? null,
        };
      })
    );

    return Response.json(products);
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Impossible de récupérer les produits Printful.",
      },
      {
        status: 500,
      }
    );
  }
}