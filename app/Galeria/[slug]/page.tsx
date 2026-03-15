import Gallery from "./Gallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {

  const { slug } = await params;

  const productName = slug.replace(/-/g, " ");

  const images = Array.from({ length: 3 }, (_, i) => ({
    src: `/images/${slug}/${i + 1}.jpg`,
  }));

  return (
    <Gallery
      images={images}
      productName={productName}
    />
  );
}