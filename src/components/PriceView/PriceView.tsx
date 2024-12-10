import { Typography, TypographyVariant } from "../Typography/Typography";

interface PriveViewProps {
  price: number;
  discount?: number;
  tax?: number;
  currencyCode?: string;
  variant?: TypographyVariant;
  originalPriceVariant?: TypographyVariant;
}

export const PriceView: React.FC<PriveViewProps> = ({
  price,
  discount: nullableDiscount,
  tax: nullableTax,
  currencyCode,
  variant = "h2",
  originalPriceVariant = "h4",
}) => {
  const discount = nullableDiscount ?? 0;
  const tax = nullableTax ?? 0;

  const formatAmount = (num: number) => {
    const formatter = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: currencyCode ?? "EUR",
    });

    return formatter.format(num);
  };

  return (
    <div className="flex items-center gap-2">
      {discount > 0 && (
        <Typography
          variant={originalPriceVariant}
          className="text-subtitle line-through"
          text={formatAmount(price + discount + tax)}
        />
      )}
      <Typography variant={variant} text={formatAmount(price)} />
    </div>
  );
};
