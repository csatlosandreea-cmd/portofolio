'use client'

import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Field,
  FieldError,
  FieldGroup,
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
import Image from 'next/image'
import blob from '@public/assets/contact-blob.png'

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
    <div className={cn(
      'pt-32 pb-8 px-8 z-10 text-white',
      'lg:pt-20 lg:px-12',
      'xl:px-32 xl:pt-32'
    )}>
      <h1 className={cn(
        'uppercase text-5xl mx-auto text-center text-white',
        'lg:text-4xl',
        'xl:text-5xl'
      )}>Contact</h1>
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

      <div className={cn(
        'flex flex-col items-center',
        'lg:flex-row lg:mt-16 lg:gap-8'
      )}>
        <form 
          id='form-contact' 
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            'w-full mx-auto mt-16',
            'sm:w-3/5',
            'lg:w-1/2 lg:mt-0',
            'xl:mt-16'
          )}
        >
          <div className='flex items-baseline gap-0 font-[plateia] text-3xl uppercase mb-2'>
            <h1 className=''>Email</h1>
            <hr className='w-32 border border-secondary scale-105 relative' />
            <h1 className=''>Me</h1>
          </div>
          <FieldGroup>
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  <Input
                    {...field}
                    id='form-email'
                    placeholder='Email'
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
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  <Textarea
                    {...field}
                    id='form-text'
                    placeholder='Your message'
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

        <div className={cn(
          'w-full flex flex-col items-center',
          'lg:w-1/2'
        )}>
          <h2 className={cn(
            'uppercase text-2xl mx-auto text-center text-white mt-8',
            'sm:mt-16',
            'lg:m-0',
            'xl:text-4xl'
          )}>FAQ</h2>
          <Accordion 
            type="single" 
            collapsible 
            className={cn(
              'mt-2',
              'sm:w-3/4',
              'xl:text-2xl!'
            )}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className='xl:text-xl'>What service do I offer?</AccordionTrigger>
              <AccordionContent className='xl:text-lg! xl:opacity-85'>
                I provide comprehensive visual communication solutions, 
                ranging from brand identity and interface design (UI/UX) 
                to digital or print advertising materials and motion graphics that bring messages to life.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className='xl:text-xl'>How is the delivery time?</AccordionTrigger>
              <AccordionContent className='xl:text-lg! xl:opacity-85'>
                The duration of the project is contingent 
                upon the scope and technical complexity of the 
                requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className='xl:text-xl'>How much does a project cost?</AccordionTrigger>
              <AccordionContent className='xl:text-lg! xl:opacity-85'>
                The pricing is contingent upon the 
                volume and complexity of the project.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Image
        src={blob}
        alt='blob'
        width={300}
        height={300}
        className={cn(
          'hidden absolute w-80 bottom-0 -right-2',
          'xl:block'
        )}
      />
    </div>
  )
}

export default ContactPage