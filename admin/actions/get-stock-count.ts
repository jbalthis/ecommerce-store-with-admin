import prismadb from "@/lib/prismadb";

export const getStockCount = async (storeId: string) => {
  const stockCount = await prismadb.product.findMany({
    where: {
      storeId,
      isArchived: false,
    },
  });

  return stockCount.length;
};
