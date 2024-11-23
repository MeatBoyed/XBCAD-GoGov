"use client"

import { ReactNode, use, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { BursaryApplicationModel } from "@/models/BursaryModel"
import {
  DriversLicenseApplication,
  DriversLicenseModel,
} from "@/models/DriversLicenseModel"
import { type DatabaseTables } from "@/types"
import { toast } from "sonner"

import { DatabaseTablesSchema, siteMapData } from "@/config/site"
import { useShowProfile } from "@/hooks/useProfile"
import useUser from "@/hooks/useUser"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import { useGetUserApplication } from "@/components/ApplicationForm/useApplication"

import { BursaryFields, DriversLicenseFields } from "./PaymentCardFields"

interface props {
  submitted?: boolean
}

export default function PaymentPage({ submitted }: props) {
  // Get the Search Params to compuse the Payment Request
  const searchParams = useSearchParams()
  const rawTableName = searchParams.get("table")
  const applicationId = searchParams.get("application")

  const { data: tableName, success } =
    DatabaseTablesSchema.safeParse(rawTableName)
  console.log("Search Params: ", tableName, applicationId)
  if (!success || !applicationId) return <BadRequestView />

  // Authenticate User - Verified by Middleware
  const { data: user, isLoading } = useUser()

  return (
    <div className="container mx-auto p-4">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle>
            {submitted && "Application Submitted Successfully"}
            {!submitted && "Complete your Application's Payment"}
          </CardTitle>
          <CardDescription>
            Please complete your payment to finalize your application
          </CardDescription>
        </CardHeader>
        {!user?.email && !isLoading && <BadRequestView />}
        {user?.email && !isLoading && (
          <PaymentConfirmationContent
            tableName={tableName as DatabaseTables}
            applicationId={applicationId}
            email={user.email}
          />
        )}
      </Card>
    </div>
  )
}

export function PaymentConfirmationContent({
  tableName,
  applicationId,
  email,
}: {
  tableName: DatabaseTables
  applicationId: string
  email: string
}) {
  const amount = 500
  const [isCopied, setIsCopied] = useState(false)

  // Get Application Data
  const {
    data: user,
    isLoading: profileLoading,
    error: profileError,
  } = useShowProfile()
  const {
    data: application,
    isLoading,
    error,
  } = useGetUserApplication(tableName, email, applicationId)
  console.log("Fetched Application: ", application)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(applicationId || "").then(() => {
      setIsCopied(true)
      toast.success("Application ID copied to clipboard")
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <>
      <CardContent className="space-y-6">
        <div className="flex w-full flex-col items-start justify-center gap-4">
          <Typography variant="h3">Drivers License Application</Typography>
          <div className="flex w-full items-center justify-between rounded-lg bg-muted p-4">
            <div>
              <p className="text-sm font-medium">Application ID</p>
              <p className="text-lg font-bold">{applicationId}</p>
            </div>
            <Button variant="outline" onClick={copyToClipboard}>
              {isCopied ? "Copied!" : "Copy ID"}
            </Button>
          </div>
          <Typography variant={"p"} affects={"large"}>
            Copy this Application ID to reference & complete your payment
          </Typography>
        </div>
        {error && !isLoading && !application && (
          <div>
            <Typography variant="h3">
              Oops something unexpected happened, please try again.
            </Typography>
          </div>
        )}
        {!application && !isLoading && !error && <BadRequestView />}
        {!application && !isLoading && !error && <BadRequestView />}
        {application && !isLoading && !error && (
          <div className="flex w-full flex-col gap-4 md:flex-row ">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Application Summary</h3>
              <p>
                <p>
                  <strong>Department:</strong>{" "}
                  {(() => {
                    switch (tableName) {
                      case "bursary_applications":
                        return "Education"
                      case "drivers_license_applications":
                        return "Transport"
                      case "passport_applications":
                        return "Passport"
                      case "vaccination_applications":
                        return "Health"
                      default:
                        return undefined // Handle default case
                    }
                  })()}
                </p>
              </p>
              {/* Make a compoene that redners the correct fields based on the Table Name */}
              {tableName === "bursary_applications" && application && (
                <BursaryFields
                  application={application[0] as BursaryApplicationModel}
                />
              )}
              {tableName === "drivers_license_applications" && application && (
                <DriversLicenseFields
                  application={application[0] as DriversLicenseModel}
                />
              )}

              <p>
                <strong>Amount due:</strong> R{amount?.toLocaleString()}
              </p>
            </div>
            {user && !profileLoading && !profileError && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Payee Details</h3>
                <p>
                  <strong>Name:</strong> {user?.name} {user?.surname}
                </p>
                <p>
                  <strong>ID Number:</strong> {user?.id_number}
                </p>
                <p>
                  <strong>Phone Number:</strong> {user?.phone_number}
                </p>
                <p>
                  <strong>Email:</strong> {user?.email}
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>
        {application && !isLoading && !error && (
          <Link
            href={`${siteMapData.StripePayment.path}/${tableName}`}
            className={buttonVariants({ size: "lg", className: "w-full" })}
          >
            Pay R{amount?.toLocaleString()}
          </Link>
        )}
      </CardFooter>
    </>
  )
}

function BadRequestView() {
  return (
    <div>
      <Typography variant="h1">Invalid Request is being made</Typography>
      <Typography variant="p">Please go back</Typography>
    </div>
  )
}
