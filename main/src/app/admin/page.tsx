import { Separator } from "@/components/ui/separator"

import {
  DashboardNavigation,
  DashboardViewController,
} from "./(components)/Views"

export default function AdminPortal() {
  return (
    <div className="mx-auto max-w-5xl space-y-14">
      <section className="mb-12">
        <DashboardNavigation baseUrl="/admin" />
      </section>

      <Separator className="my-8" />

      <DashboardViewController selectedView="Admin" />
    </div>
  )
}
