import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ClassProp } from 'class-variance-authority/dist/types';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { ControllerProps } from 'react-hook-form';
import { default as default_2 } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ElementType } from 'react';
import { FieldError } from 'react-hook-form';
import { FieldPath } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { FormProviderProps } from 'react-hook-form';
import { ForwardRefExoticComponent } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Optional } from '@vogelvlug/typescript-utils';
import { PropsWithChildren } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React_2 from 'react';
import { RefAttributes } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { SlotProps } from '@radix-ui/react-slot';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { VariantProps } from 'class-variance-authority';

export declare const Alert: React.FC<PropsWithChildren<AlertProps>>;

declare interface AlertProps extends VariantProps<typeof alertVariants> {
    title?: string;
    className?: string;
}

declare const alertVariants: (props?: ({
    variant?: "default" | "success" | "warning" | "error" | "info" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Button: React_2.ForwardRefExoticComponent<ButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

declare const buttonVariants: (props?: ({
    variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Checkbox: React_2.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const ClickableLogo: default_2.FC<VariantProps<typeof logoVariants>>;

export declare const Collapsible: React.FC<CollapsiblePrimitive.CollapsibleProps>;

export declare const CollapsibleContent: ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & RefAttributes<HTMLDivElement>>;

export declare const CollapsibleTrigger: React.FC<CollapsiblePrimitive.CollapsibleTriggerProps>;

declare type ColorMode = "dark" | "light" | "system";

declare interface DesignSystemContextValue {
    LinkElement: React.ElementType;
    ImageElement: React.ElementType;
    logo: {
        src: string;
    };
    colorMode: ColorMode;
    setColorMode: (colorMode: ColorMode) => void;
}

export declare const DesignSystemProvider: React.FC<PropsWithChildren<Optional<DesignSystemContextValue, "ImageElement" | "LinkElement" | "colorMode" | "setColorMode">>>;

export declare const Divider: React_2.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenu: React_2.FC<DropdownMenuPrimitive.DropdownMenuProps>;

export declare const DropdownMenuCheckboxItem: React_2.FC<DropdownMenuCheckboxItemProps>;

declare interface DropdownMenuCheckboxItemProps extends React_2.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {
    checked?: boolean;
}

export declare const DropdownMenuContent: React_2.FC<DropdownMenuContentProps>;

declare interface DropdownMenuContentProps extends React_2.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
    sideOffset?: number;
}

export declare const DropdownMenuGroup: React_2.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuItem: React_2.FC<DropdownMenuItemProps>;

declare interface DropdownMenuItemProps extends React_2.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
    inset?: boolean;
}

export declare const DropdownMenuLabel: React_2.FC<DropdownMenuLabelProps>;

declare interface DropdownMenuLabelProps extends React_2.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> {
    inset?: boolean;
}

export declare const DropdownMenuPortal: React_2.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;

export declare const DropdownMenuRadioGroup: React_2.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownMenuRadioItem: React_2.FC<DropdownMenuRadioItemProps>;

declare interface DropdownMenuRadioItemProps extends React_2.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> {
}

export declare const DropdownMenuSeparator: React_2.FC<DropdownMenuSeparatorProps>;

declare interface DropdownMenuSeparatorProps extends React_2.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {
}

export declare const DropdownMenuShortcut: React_2.FC<DropdownMenuShortcutProps>;

declare interface DropdownMenuShortcutProps extends React_2.HTMLAttributes<HTMLSpanElement> {
}

export declare const DropdownMenuSub: React_2.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;

export declare const DropdownMenuSubContent: React_2.FC<DropdownMenuSubContentProps>;

declare interface DropdownMenuSubContentProps extends React_2.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> {
}

export declare const DropdownMenuSubTrigger: React_2.FC<DropdownMenuSubTriggerProps>;

declare interface DropdownMenuSubTriggerProps extends React_2.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
    inset?: boolean;
}

export declare const DropdownMenuTrigger: React_2.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined>(props: FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React_2.JSX.Element;

export declare const FormControl: React_2.ForwardRefExoticComponent<Omit<SlotProps & React_2.RefAttributes<HTMLElement>, "ref"> & React_2.RefAttributes<HTMLElement>>;

export declare const FormDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => JSX_2.Element;

export declare const FormItem: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const FormLabel: React_2.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React_2.RefAttributes<HTMLLabelElement>, "ref"> & React_2.RefAttributes<HTMLLabelElement>>;

export declare const FormMessage: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const Input: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React_2.RefAttributes<HTMLInputElement>>;

export declare const Label: React_2.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React_2.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: ClassProp | undefined) => string> & React_2.RefAttributes<HTMLLabelElement>>;

declare const logoVariants: (props?: ({
    height?: "sm" | "lg" | "md" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const NavMenu: React.FC<PropsWithChildren>;

export declare const NavMenuItem: React.FC<NavMenuItemProps>;

declare interface NavMenuItemProps extends PropsWithChildren {
    href?: string;
    title: string;
}

export declare const NavSubMenuItem: React.FC<SubRoute>;

export declare const PriceView: React.FC<PriveViewProps>;

declare interface PriveViewProps {
    price: number;
    discount?: number;
    tax?: number;
    currencyCode?: string;
    variant?: TypographyVariant;
    originalPriceVariant?: TypographyVariant;
}

export declare const RadioGroup: React_2.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const RadioGroupItem: React_2.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const Select: React_2.FC<SelectPrimitive.SelectProps>;

export declare const SelectContent: React_2.FC<SelectContentProps>;

declare interface SelectContentProps extends SelectPrimitive.SelectContentProps {
    className?: string;
    children: React_2.ReactNode;
    position?: "popper" | "item-aligned";
}

export declare const SelectGroup: React_2.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectItem: React_2.FC<SelectItemProps>;

declare interface SelectItemProps extends SelectPrimitive.SelectItemProps {
    className?: string;
    children: React_2.ReactNode;
}

export declare const SelectLabel: React_2.FC<SelectLabelProps>;

declare interface SelectLabelProps extends SelectPrimitive.SelectLabelProps {
    className?: string;
}

declare interface SelectScrollButtonProps extends SelectPrimitive.SelectScrollUpButtonProps {
    className?: string;
}

export declare const SelectScrollDownButton: React_2.FC<SelectScrollButtonProps>;

export declare const SelectScrollUpButton: React_2.FC<SelectScrollButtonProps>;

export declare const SelectSeparator: React_2.FC<SelectSeparatorProps>;

declare interface SelectSeparatorProps extends SelectPrimitive.SelectSeparatorProps {
    className?: string;
}

export declare const SelectTrigger: React_2.FC<SelectTriggerProps>;

declare interface SelectTriggerProps extends SelectPrimitive.SelectTriggerProps {
    className?: string;
    children: React_2.ReactNode;
}

export declare const SelectValue: React_2.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare const Sheet: React_2.FC<SheetPrimitive.DialogProps>;

export declare const SheetClose: React_2.ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const SheetContent: React_2.FC<SheetContentProps>;

declare interface SheetContentProps extends SheetPrimitive.DialogContentProps, VariantProps<typeof sheetVariants> {
    className?: string;
    children: React_2.ReactNode;
}

export declare const SheetDescription: React_2.FC<SheetDescriptionProps>;

declare interface SheetDescriptionProps extends SheetPrimitive.DialogDescriptionProps {
    className?: string;
}

export declare const SheetFooter: React_2.FC<SheetFooterProps>;

declare interface SheetFooterProps extends React_2.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export declare const SheetHeader: React_2.FC<SheetHeaderProps>;

declare interface SheetHeaderProps extends React_2.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export declare const SheetOverlay: React_2.FC<SheetOverlayProps>;

declare interface SheetOverlayProps extends SheetPrimitive.DialogOverlayProps {
    className?: string;
}

export declare const SheetPortal: React_2.FC<SheetPrimitive.DialogPortalProps>;

export declare const SheetTitle: React_2.FC<SheetTitleProps>;

declare interface SheetTitleProps extends SheetPrimitive.DialogTitleProps {
    className?: string;
}

export declare const SheetTrigger: React_2.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

declare const sheetVariants: (props?: ({
    side?: "top" | "right" | "bottom" | "left" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): JSX_2.Element;

declare interface SubRoute {
    href: string;
    title: string;
    description: string;
}

export declare const Switch: ({ className, variant, ...props }: SwitchProps) => JSX_2.Element;

declare interface SwitchProps extends SwitchPrimitives.SwitchProps, VariantProps<typeof switchVariants> {
    className?: string;
}

declare const switchVariants: (props?: ({
    variant?: "accent" | "primary" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Table: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableElement> & React_2.RefAttributes<HTMLTableElement>>;

export declare const TableBody: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableCaption: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableCaptionElement> & React_2.RefAttributes<HTMLTableCaptionElement>>;

export declare const TableCell: React_2.ForwardRefExoticComponent<React_2.TdHTMLAttributes<HTMLTableCellElement> & React_2.RefAttributes<HTMLTableCellElement>>;

export declare const TableFooter: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableHead: React_2.ForwardRefExoticComponent<React_2.ThHTMLAttributes<HTMLTableCellElement> & React_2.RefAttributes<HTMLTableCellElement>>;

export declare const TableHeader: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableSectionElement> & React_2.RefAttributes<HTMLTableSectionElement>>;

export declare const TableRow: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLTableRowElement> & React_2.RefAttributes<HTMLTableRowElement>>;

export declare const Testimonial: React_2.FC<TestimonialProps>;

declare interface TestimonialProps {
    imageSrc: string;
    name: string;
    tagline?: string;
    link?: string;
    text: string;
    className?: string;
}

export declare const Typography: React.FC<TypographyProps>;

declare type TypographyProps = VariantProps<typeof typographyVariants> & {
    element?: ElementType;
    text: string;
    highlightWords?: number[];
    className?: string;
};

export declare type TypographyVariant = VariantProps<typeof typographyVariants>["variant"];

declare const typographyVariants: (props?: ({
    variant?: "main" | "h5" | "h2" | "h3" | "label" | "body" | "h1" | "h4" | "h6" | "subtitle" | "overtitle" | "accent" | null | undefined;
    align?: "center" | "right" | "left" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};

export { }
