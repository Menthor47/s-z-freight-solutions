import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbItemConfig {
  label: string;
  to?: string;
}

interface PageBreadcrumbsProps {
  items: BreadcrumbItemConfig[];
}

export const PageBreadcrumbs = ({ items }: PageBreadcrumbsProps) => {
  if (!items || items.length === 0) return null;

  const lastIndex = items.length - 1;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === lastIndex;

          return (
            <span key={`${item.label}-${index}`} className="contents">
              <BreadcrumbItem>
                {isLast || !item.to ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={item.to}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </span>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
