import { notFound } from "next/navigation";

export default async function reviewsDetails({ params }: {
    params: Promise<{ productId: string; reviewId: string }>
}) {
    const { productId, reviewId } = await params
    if (parseInt(productId) > 1000) {
        return notFound()
    }
    return (
        <>  
            <h1>Product Detail About {productId}, in Review {reviewId}</h1>
        </>
    )
}