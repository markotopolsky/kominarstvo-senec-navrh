import { ImageIcon } from "./icons";

type PhotoPlaceholderProps = {
  label: string;
  className?: string;
};

/** Slot for a photo the client still has to supply (see brief.md, Otvorené body). */
export function PhotoPlaceholder({ label, className = "" }: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Pripravovaná fotka: ${label}`}
      className={`flex flex-col items-center justify-center gap-2 rounded-button bg-sand text-muted ${className}`}
    >
      <ImageIcon className="size-6" />
      <span className="text-small">Foto: {label}</span>
    </div>
  );
}
