'use client'

import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@components/ui/field'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion"
import { Input } from '@components/ui/input'
import { Button } from '@components/ui/button'
import { Controller, useForm } from 'react-hook-form'
import { 
  IconBrandFacebook, IconBrandInstagram, 
  IconBrandLinkedin, IconMail,
  IconLoader2  
} from '@tabler/icons-react'
import { cn } from '@/src/lib/utils'
import { Textarea } from '@components/ui/textarea'
import { useForm as useFormSpree } from '@formspree/react';
import { toast } from 'sonner'
import Link from 'next/link'

export const createFormSchema = () =>
  z.object({
    email: z.email('Invalid email address'),
    text: z
      .string()
      .min(6, 'At least 6 characters')
      .max(500, 'At most 500 characters')
  });

const ContactPage = () => {
  const [state, handleSubmit] = useFormSpree(process.env.NEXT_PUBLIC_FORMSPREE_FORMID!);
  const [isSending, setIsSending] = useState<boolean>(false)
  const formSchema = createFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      text: '',
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSending(true)

    try {
      await handleSubmit(data)

      toast.success("Message sent")
    } catch {
      toast.error("Error occured while sending the message")
    }

    setIsSending(false)
    toast.success('Mesaj trimis')
    form.reset()
  }

  return (
    <div className='pt-32 pb-8 px-8 z-10 text-white'>
      <h1 className='uppercase text-5xl mx-auto text-center text-white'>Contact</h1>
      <div className='flex justify-center gap-4 text-white my-4 '>
        <Link href='https://www.facebook.com/andreea.florentina.106' target='_blank'>
          <IconBrandFacebook size={32} />
        </Link>
        <Link href='https://www.linkedin.com/in/andreea-florentina-csatlos-musan-8682aa343' target='_blank'>
          <IconBrandLinkedin size={32} />
        </Link>
        <Link href='https://www.instagram.com/a._andreea_a' target='_blank'>
          <IconBrandInstagram size={32} />
        </Link>
        <Link href='mailto:csatlosandreea@gmail.com' target='_blank'>
          <IconMail size={32} />
        </Link>
      </div>

      <form 
        id='form-contact' 
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          'w-full mx-auto mt-8',
          'sm:w-3/4',
          'md:w-3/5',
          'md:w-2/5'
        )}
      >
        <FieldGroup>
          <Controller
            name='email'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className='flex-center-between'>
                  <FieldLabel htmlFor='form-email' className={cn(
                    'text-white! text-xl',
                    '2xl:text-2xl'
                  )}>
                    Email
                  </FieldLabel>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
                <Input
                  {...field}
                  id='form-email'
                  aria-invalid={fieldState.invalid}
                  className={cn(
                    'rounded-none! border-0 border-b border-b-white text-white text-xl',
                    '2xl:text-2xl'
                  )}
                />
              </Field>
            )}
          />
          <Controller
            name='text'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className='flex-center-between'>
                  <FieldLabel htmlFor='form-text' className={cn(
                    'text-white! text-xl',
                    '2xl:text-2xl'
                  )}>
                    Message
                  </FieldLabel>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
                <Textarea
                  {...field}
                  id='form-text'
                  aria-invalid={fieldState.invalid}
                  autoComplete='off'
                  className={cn(
                    'rounded-none! border-0 border-b border-b-white text-white text-xl h-30 max-h-30 resize-none overflow-y-scroll',
                    '2xl:text-2xl'
                  )}
                />
              </Field>
            )}
          />
        </FieldGroup>

        <Field orientation='horizontal' className='flex items-center mt-8'>
          <Button 
            type='submit' 
            disabled={isSending || !form.formState.isDirty}
            form='form-contact'
            className={cn(
              'w-full rounded-none bg-white hover:bg-white/90 text-black hover:text-black',
              '2xl:text-xl 2xl:py-4!'
            )}
          >
            {isSending ? (
              <IconLoader2 className='rotate' size={20} />
            ) : (
              "Send"
            )}
          </Button>
        </Field>
      </form>

      <h2 className='uppercase text-2xl mx-auto text-center text-white mt-8'>FAQ</h2>
      <Accordion type="single" collapsible className='mt-2'>
        <AccordionItem value="item-1">
          <AccordionTrigger>What service do I offer?</AccordionTrigger>
          <AccordionContent>
            I provide comprehensive visual communication solutions, 
            ranging from brand identity and interface design (UI/UX) 
            to digital or print advertising materials and motion graphics that bring messages to life.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How is the delivery time?</AccordionTrigger>
          <AccordionContent>
            The duration of the project is contingent 
            upon the scope and technical complexity of the 
            requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How much does a project cost?</AccordionTrigger>
          <AccordionContent>
            The pricing is contingent upon the 
            volume and complexity of the project.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ContactPage