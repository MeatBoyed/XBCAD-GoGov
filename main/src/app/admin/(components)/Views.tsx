"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { AppointmentSchema } from "@/models/AppointmentModel"
import { BursaryApplicationSchema } from "@/models/BursaryModel"
import { DriversLicenseSchema } from "@/models/DriversLicenseModel"
import { PassportApplicationSchema } from "@/models/PassportApplicationModel"
import { VaccinationApplicationSchema } from "@/models/VaccinationModel"
import {
  BookIcon,
  CalendarCheckIcon,
  CreditCardIcon,
  GraduationCap,
  LayoutGridIcon,
  LucideIcon,
  MessageSquareIcon,
  SyringeIcon,
} from "lucide-react"
import { z } from "zod"

import { siteMapData } from "@/config/site"
import { Card } from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import { ApplicationTable } from "@/app/dashboard/applications/(components)/ApplicationTable"

const ViewsSchema = z.enum([
  "app-index",
  "app-bursary",
  "app-drivers-license",
  "app-passport",
  "app-vaccination",
  "appoint-index",
])

type Views = z.infer<typeof ViewsSchema>

export function DashboardNavigation({ baseUrl }: { baseUrl: string }) {
  const searchParams = useSearchParams()
  const { data: currentView } = ViewsSchema.safeParse(searchParams.get("view"))
  const isActive = (view: Views) => currentView === view

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
      <DashboardNavigationCard
        details={{
          icon: LayoutGridIcon,
          title: "Applications",
          link: `${baseUrl}?view=app-index`,
          active: currentView?.split("-")[0] === "app",
        }}
      />
      <DashboardNavigationCard
        details={{
          icon: CalendarCheckIcon,
          title: "Appointments",
          link: `${baseUrl}?view=appoint-index`,
          active: currentView?.split("-")[0] === "appoint",
        }}
      />
      <DashboardNavigationCard
        details={{
          icon: MessageSquareIcon,
          title: "Feedbacks",
          link: "",
        }}
      />
    </div>
  )
}

type ControllerView = "Admin" | "Dashboard"
export function DashboardViewController({
  selectedView,
  email,
}: {
  email?: string
  selectedView: ControllerView
}) {
  const searchParams = useSearchParams()
  const { data: view } = ViewsSchema.safeParse(searchParams.get("view"))

  return (
    <section className="mb-12">
      {view === "app-index" && <ApplicationSelectionView view={selectedView} />}
      {view === "app-bursary" && (
        <ApplicationTable
          heading="Bursary Applications"
          tableName="bursary_applications"
          modelSchema={BursaryApplicationSchema}
        />
      )}
      {view === "app-drivers-license" && (
        <ApplicationTable
          heading="Drivers License Applications"
          tableName="drivers_license_applications"
          modelSchema={DriversLicenseSchema}
        />
      )}
      {view === "app-passport" && (
        <ApplicationTable
          heading="Passport Applications"
          tableName="passport_applications"
          modelSchema={PassportApplicationSchema}
        />
      )}
      {view === "app-vaccination" && (
        <ApplicationTable
          heading="Vaccination Applications"
          tableName="vaccination_applications"
          modelSchema={VaccinationApplicationSchema}
        />
      )}
      {view === "appoint-index" && (
        <ApplicationTable
          heading="Scheduled Appointments"
          tableName="scheduled_appointments"
          modelSchema={AppointmentSchema}
          email={email}
        />
      )}
    </section>
  )
}

export function ApplicationSelectionView({ view }: { view: ControllerView }) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
      <DashboardNavigationCard
        details={{
          icon: GraduationCap,
          title: "Bursaries",
          link:
            view === "Admin"
              ? "/admin?view=app-bursary"
              : siteMapData.Dashboard.children.Applications.children.Bursary
                  .path,
        }}
      />
      <DashboardNavigationCard
        details={{
          icon: CreditCardIcon,
          title: "Drivers Licenses",
          link:
            view === "Admin"
              ? "/admin?view=app-bursary"
              : siteMapData.Dashboard.children.Applications.children
                  .DriversLicense.path,
        }}
      />
      <DashboardNavigationCard
        details={{
          icon: BookIcon,
          title: "Passport",
          link:
            view === "Admin"
              ? "/admin?view=app-bursary"
              : siteMapData.Dashboard.children.Applications.children.Passport
                  .path,
        }}
      />
      <DashboardNavigationCard
        details={{
          icon: SyringeIcon,
          title: "Vaccination",
          link:
            view === "Admin"
              ? "/admin?view=app-bursary"
              : siteMapData.Dashboard.children.Applications.children.Vaccination
                  .path,
        }}
      />
    </div>
  )
}

export function DashboardNavigationCard({
  details,
}: {
  details: {
    icon: LucideIcon
    title: string
    link: string
    active?: boolean
  }
}) {
  return (
    <Link href={details.link} className="min-h-full w-full">
      <Card
        className={`flex h-full w-full flex-col items-center justify-center space-y-4 p-5 text-center hover:cursor-pointer hover:bg-secondary ${details.active && "border-green-500"}`}
      >
        <details.icon size={40} />
        <Typography variant={"p"} affects={"large"}>
          {details.title}
        </Typography>
      </Card>
    </Link>
  )
}
