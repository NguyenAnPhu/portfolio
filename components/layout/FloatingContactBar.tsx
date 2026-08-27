"use client";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import { IconButton, Tooltip } from "@mui/material";

import { contactLinks } from "@/data/contact";
import { ContactLink } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  phone: <PhoneIcon />,
  email: <EmailIcon />,
  github: <GitHubIcon />,
  facebook: <FacebookIcon />,
};

export function FloatingContactBar() {
  return (
    <div className="fixed top-1/2 right-4 z-50 flex -translate-y-1/2 flex-col gap-3 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-md glass-2 border border-border transition-all duration-200 hover:border-border/80 sm:right-6">
      {contactLinks.map((link: ContactLink) => (
        <Tooltip key={link.type} title={link.label} placement="left">
          <IconButton
            component="a"
            href={link.href}
            target={link.type === "github" || link.type === "facebook" ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={link.label}
            className="transition-all duration-200 hover:scale-110 hover:text-brand-600 text-foreground cursor-pointer"
            sx={{
              color: "inherit",
              "&:hover": {
                color: "var(--brand-600)",
                backgroundColor: "var(--brand-50)",
              },
            }}
          >
            {iconMap[link.type]}
          </IconButton>
        </Tooltip>
      ))}
    </div>
  );
}
