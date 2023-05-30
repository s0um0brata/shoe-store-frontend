export const discountedPricePercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const discountPrice = (discount/originalPrice) * 100;
    return discountPrice.toFixed(2)
}