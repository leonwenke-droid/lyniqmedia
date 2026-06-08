import Link from "next/link";
import { CompassIcon, HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export function NotFoundScreen() {
  return (
    <div className="relative flex min-h-[calc(100vh-72px)] w-full items-center justify-center overflow-hidden px-6 py-16">
      <Empty className="border-none bg-transparent p-0 md:p-0">
        <EmptyHeader className="max-w-md gap-4">
          <p
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00c2cb]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {"// SEITE NICHT GEFUNDEN"}
          </p>
          <EmptyTitle
            className="mask-b-from-20% mask-b-to-80% text-9xl font-extrabold tracking-tighter text-[#f5f9ff]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            404
          </EmptyTitle>
          <EmptyDescription className="-mt-4 max-w-sm text-base text-[rgba(245,249,255,0.55)]">
            Die Seite, die du suchst, existiert nicht
            <br />
            oder wurde verschoben.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href="/">
                <HomeIcon className="size-4" data-icon="inline-start" />
                Zur Startseite
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#projekte">
                <CompassIcon className="size-4" data-icon="inline-start" />
                Projekte entdecken
              </Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
