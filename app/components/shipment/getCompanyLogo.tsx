import { ReactNode } from "react";
import TechGear from "../company-logos/TechGear";
import StyleHub from "../company-logos/StyleHub";
import FreshNest from "../company-logos/FreshNest";
import FitPlus from "../company-logos/FitPlus";
import EcoLights from "../company-logos/EcoLights";
import AutoParts from "../company-logos/AutoParts";
import GreenHaven from "../company-logos/GreenHaven";
import ModaWear from "../company-logos/ModaWear";
import QuickTools from "../company-logos/QuickParts";
import VitaFresh from "../company-logos/VitaFresh";
import StyleDepot from "../company-logos/StyleDepot";
import SunCore from "../company-logos/SunCore";

// Map company name → JSX element
const logoMap: Record<string, ReactNode> = {
  "TechGear Inc.": <TechGear />,
  "StyleHub Co.": <StyleHub />,
  FreshNest: <FreshNest />,
  "FitPlus Gear": <FitPlus />,
  EcoLights: <EcoLights />,
  "AutoParts Pro": <AutoParts />,
  GreenHaven: <GreenHaven />,
  ModaWear: <ModaWear />,
  SunCore: <SunCore />,
  QuickTools: <QuickTools />,
  VitaFresh: <VitaFresh />,
  StyleDepot: <StyleDepot />,
};

export function getCompanyLogo(companyName: string): ReactNode {
  return logoMap[companyName] || null;
}
