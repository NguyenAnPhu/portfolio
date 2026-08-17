"use client";

import Image from "next/image";
import { useState } from "react";
import { Certificate } from "@/types";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div 
        className="group overflow-hidden rounded-2xl border border-grey-700 bg-card shadow-sm transition-all duration-200 hover:shadow-md hover:border-border/80 cursor-pointer active:scale-95"
        onClick={() => setOpen(true)}
      >
        <div className="relative aspect-4/3 w-full overflow-hidden bg-muted/30 p-4">
          <div className="relative h-full w-full overflow-hidden rounded-xl border border-border/50 bg-background shadow-inner transition-colors duration-200 group-hover:border-border/70">
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-center font-bold text-foreground leading-snug line-clamp-2">
            {certificate.title}
          </h3>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
            overflow: "hidden",
            margin: 2
          },
        }}
      >
        <div className="relative flex flex-col items-center justify-center">
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: -40,
              right: 0,
              color: "white",
              zIndex: 10,
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" }
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="relative h-[80vh] w-[90vw] max-w-5xl rounded-lg bg-background p-2 sm:p-4">
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </Dialog>
    </>
  );
}

