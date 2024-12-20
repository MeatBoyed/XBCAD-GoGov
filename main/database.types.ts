export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_profile: {
        Row: {
          adminid: string | null
          created_at: string
          email: string
          id: number
          password: string
        }
        Insert: {
          adminid?: string | null
          created_at?: string
          email: string
          id?: number
          password: string
        }
        Update: {
          adminid?: string | null
          created_at?: string
          email?: string
          id?: number
          password?: string
        }
        Relationships: []
      }
      bursary_applications: {
        Row: {
          academic_achievements: string | null
          acceptance_letter: string | null
          address: string | null
          annual_tuition_fee: string | null
          city: string | null
          course_of_study: string | null
          created_at: string
          date_of_birth: string | null
          email: string | null
          financial_need_statement: string | null
          financial_statement: string | null
          gender: string | null
          id: number
          id_document: string | null
          id_number: string | null
          institution_name: string | null
          name: string | null
          other_funding_sources: string | null
          phone_number: string | null
          postcode: string | null
          province: string | null
          status: string | null
          study_year: string | null
          surname: string | null
          total_course_duration: string | null
          transcript: string | null
          user_id: string | null
        }
        Insert: {
          academic_achievements?: string | null
          acceptance_letter?: string | null
          address?: string | null
          annual_tuition_fee?: string | null
          city?: string | null
          course_of_study?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          financial_need_statement?: string | null
          financial_statement?: string | null
          gender?: string | null
          id?: number
          id_document?: string | null
          id_number?: string | null
          institution_name?: string | null
          name?: string | null
          other_funding_sources?: string | null
          phone_number?: string | null
          postcode?: string | null
          province?: string | null
          status?: string | null
          study_year?: string | null
          surname?: string | null
          total_course_duration?: string | null
          transcript?: string | null
          user_id?: string | null
        }
        Update: {
          academic_achievements?: string | null
          acceptance_letter?: string | null
          address?: string | null
          annual_tuition_fee?: string | null
          city?: string | null
          course_of_study?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          financial_need_statement?: string | null
          financial_statement?: string | null
          gender?: string | null
          id?: number
          id_document?: string | null
          id_number?: string | null
          institution_name?: string | null
          name?: string | null
          other_funding_sources?: string | null
          phone_number?: string | null
          postcode?: string | null
          province?: string | null
          status?: string | null
          study_year?: string | null
          surname?: string | null
          total_course_duration?: string | null
          transcript?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      drivers_license_applications: {
        Row: {
          address: string | null
          city: string | null
          created_at: string | null
          date_of_birth: string | null
          email: string | null
          eye_test_certificate: string | null
          gender: string | null
          id: string
          id_document: string | null
          id_number: string | null
          learners_license: string | null
          license_category: string | null
          name: string
          passport_photo: string | null
          phone_number: string | null
          postcode: string | null
          proof_of_address: string | null
          province: string | null
          status: string | null
          surname: string | null
          test_center: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string | null
          eye_test_certificate?: string | null
          gender?: string | null
          id?: string
          id_document?: string | null
          id_number?: string | null
          learners_license?: string | null
          license_category?: string | null
          name: string
          passport_photo?: string | null
          phone_number?: string | null
          postcode?: string | null
          proof_of_address?: string | null
          province?: string | null
          status?: string | null
          surname?: string | null
          test_center?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string | null
          eye_test_certificate?: string | null
          gender?: string | null
          id?: string
          id_document?: string | null
          id_number?: string | null
          learners_license?: string | null
          license_category?: string | null
          name?: string
          passport_photo?: string | null
          phone_number?: string | null
          postcode?: string | null
          proof_of_address?: string | null
          province?: string | null
          status?: string | null
          surname?: string | null
          test_center?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          application_id: string
          application_type: string
          created_at: string
          id: number
          is_read: boolean | null
          message: string
          status: string | null
          user_email: string
        }
        Insert: {
          application_id: string
          application_type: string
          created_at?: string
          id?: number
          is_read?: boolean | null
          message: string
          status?: string | null
          user_email: string
        }
        Update: {
          application_id?: string
          application_type?: string
          created_at?: string
          id?: number
          is_read?: boolean | null
          message?: string
          status?: string | null
          user_email?: string
        }
        Relationships: []
      }
      passport_applications: {
        Row: {
          address: string | null
          city: string | null
          created_at: string
          date_of_birth: string | null
          email: string | null
          gender: string | null
          id: number
          id_document: string | null
          id_number: string | null
          name: string | null
          passport_photo: string | null
          passport_type: string | null
          phone_number: string | null
          postcode: string | null
          processing_center: string | null
          proof_of_address: string | null
          province: string | null
          status: string | null
          surname: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          gender?: string | null
          id?: number
          id_document?: string | null
          id_number?: string | null
          name?: string | null
          passport_photo?: string | null
          passport_type?: string | null
          phone_number?: string | null
          postcode?: string | null
          processing_center?: string | null
          proof_of_address?: string | null
          province?: string | null
          status?: string | null
          surname?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          gender?: string | null
          id?: number
          id_document?: string | null
          id_number?: string | null
          name?: string | null
          passport_photo?: string | null
          passport_type?: string | null
          phone_number?: string | null
          postcode?: string | null
          processing_center?: string | null
          proof_of_address?: string | null
          province?: string | null
          status?: string | null
          surname?: string | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          application_id: string | null
          card_holder: string
          card_number: string
          created_at: string | null
          cvv: string
          expiry_date: string
          id: string
          payment_date: string | null
          payment_status: string | null
          receipt_url: string | null
          reference_number: string
          user_id: string | null
        }
        Insert: {
          amount: number
          application_id?: string | null
          card_holder: string
          card_number: string
          created_at?: string | null
          cvv: string
          expiry_date: string
          id?: string
          payment_date?: string | null
          payment_status?: string | null
          receipt_url?: string | null
          reference_number: string
          user_id?: string | null
        }
        Update: {
          amount?: number
          application_id?: string | null
          card_holder?: string
          card_number?: string
          created_at?: string | null
          cvv?: string
          expiry_date?: string
          id?: string
          payment_date?: string | null
          payment_status?: string | null
          receipt_url?: string | null
          reference_number?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profile: {
        Row: {
          address: string
          city: string
          created_at: string
          date_of_birth: string
          email: string
          gender: string
          id: string
          id_number: string
          name: string
          phone_number: string
          postcode: string
          province: string
          surname: string
        }
        Insert: {
          address: string
          city: string
          created_at?: string
          date_of_birth: string
          email: string
          gender: string
          id?: string
          id_number: string
          name: string
          phone_number: string
          postcode: string
          province: string
          surname: string
        }
        Update: {
          address?: string
          city?: string
          created_at?: string
          date_of_birth?: string
          email?: string
          gender?: string
          id?: string
          id_number?: string
          name?: string
          phone_number?: string
          postcode?: string
          province?: string
          surname?: string
        }
        Relationships: []
      }
      scheduled_appointments: {
        Row: {
          appointment_date: string | null
          appointment_time: string | null
          created_at: string | null
          email: string
          id: string
          name: string | null
          phone: string | null
          reason: string | null
          status: string | null
          surname: string | null
          updated_at: string | null
        }
        Insert: {
          appointment_date?: string | null
          appointment_time?: string | null
          created_at?: string | null
          email: string
          id?: string
          name?: string | null
          phone?: string | null
          reason?: string | null
          status?: string | null
          surname?: string | null
          updated_at?: string | null
        }
        Update: {
          appointment_date?: string | null
          appointment_time?: string | null
          created_at?: string | null
          email?: string
          id?: string
          name?: string | null
          phone?: string | null
          reason?: string | null
          status?: string | null
          surname?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_feedback: {
        Row: {
          created_at: string
          email: string | null
          feedback: string | null
          id: string
          phone: number | null
          rating: number | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          feedback?: string | null
          id?: string
          phone?: number | null
          rating?: number | null
        }
        Update: {
          created_at?: string
          email?: string | null
          feedback?: string | null
          id?: string
          phone?: number | null
          rating?: number | null
        }
        Relationships: []
      }
      vaccination_applications: {
        Row: {
          address: string | null
          city: string | null
          created_at: string
          date_of_birth: string | null
          email: string | null
          gender: string | null
          id: number
          id_document: string | null
          id_number: string | null
          medical_records: string | null
          name: string | null
          phone_number: string | null
          postcode: string | null
          proof_of_residence: string | null
          status: string | null
          surname: string | null
          user_id: string | null
          vaccination_center: string | null
          vaccine_type: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          gender?: string | null
          id?: number
          id_document?: string | null
          id_number?: string | null
          medical_records?: string | null
          name?: string | null
          phone_number?: string | null
          postcode?: string | null
          proof_of_residence?: string | null
          status?: string | null
          surname?: string | null
          user_id?: string | null
          vaccination_center?: string | null
          vaccine_type?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          gender?: string | null
          id?: number
          id_document?: string | null
          id_number?: string | null
          medical_records?: string | null
          name?: string | null
          phone_number?: string | null
          postcode?: string | null
          proof_of_residence?: string | null
          status?: string | null
          surname?: string | null
          user_id?: string | null
          vaccination_center?: string | null
          vaccine_type?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      notification_status: "unread" | "read" | "archived"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
