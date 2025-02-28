// export default function NotFound() {
//     return (
//         <div>
//             <h1>Review not found</h1>
//         </div>
//     );
// }
"use client";
import { usePathname } from "next/navigation";
export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2]
    const reviewId = pathname.split("/")[4]
    return (
        <div>
            <h1>Review {reviewId} of Product {productId} not found</h1>
        </div>
    );
}