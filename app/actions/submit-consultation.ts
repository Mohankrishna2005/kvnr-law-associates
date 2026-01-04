"use server";

import { z } from "zod";

const ConsultationSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be valid"),
    practiceArea: z.string(),
    description: z.string().min(20, "Please provide more details about your matter"),
    consent: z.literal(true, {
        errorMap: () => ({ message: "You must agree to the terms" }),
    }),
});

export type ConsultationState = {
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        practiceArea?: string[];
        description?: string[];
        consent?: string[];
    };
    message?: string;
    success?: boolean;
};

export async function submitConsultation(
    prevState: ConsultationState,
    formData: FormData
): Promise<ConsultationState> {
    const validatedFields = ConsultationSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        practiceArea: formData.get("practiceArea"),
        description: formData.get("description"),
        consent: formData.get("consent") === "on" ? true : false,
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please fix the errors below.",
            success: false,
        };
    }

    // Simulate DB/Email delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Consultation Request:", validatedFields.data);

    return {
        success: true,
        message: "Thank you. Your consultation request has been securely recorded. Our office will contact you within 24 hours.",
    };
}
