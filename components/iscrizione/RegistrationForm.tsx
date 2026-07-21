'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useId, useState, type FormEvent } from 'react';

export type RegistrationType = 'privato' | 'azienda';

export type SessionOption = {
  id: string;
  label: string;
};

type RegistrationFormProps = {
  courseTitle: string;
  courseSlug: string;
  sessions: SessionOption[];
  levels?: string[];
  defaultSessionId?: string;
  defaultLevel?: string;
};

const inputClassName =
  'w-full border border-[#aaa] bg-[#f7f7f7] px-2.5 py-2.5 text-sm font-medium text-[#1e1e1c] outline-none transition-colors focus:border-primary';

const selectClassName = `${inputClassName} appearance-none pr-9`;

function FieldLabel({ htmlFor, children, required }: { htmlFor: string; children: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="font-heading text-2xl font-semibold uppercase tracking-[0.04em] text-[#1e1e1c]">
      {children}
      {required && <span className="text-primary">*</span>}
    </label>
  );
}

function SelectField({
  id,
  label,
  required,
  placeholder,
  options,
  defaultValue,
}: {
  id: string;
  label: string;
  required?: boolean;
  placeholder: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <div className="relative">
        <select id={id} name={id} required={required} defaultValue={defaultValue ?? ''} className={selectClassName}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-[#1e1e1c]" aria-hidden />
      </div>
    </div>
  );
}

function TextField({
  id,
  label,
  required,
  type = 'text',
  autoComplete,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: 'text' | 'email' | 'tel';
  autoComplete?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={`${inputClassName} h-[42px]`}
      />
    </div>
  );
}

export default function RegistrationForm({
  courseTitle,
  courseSlug,
  sessions,
  levels = [],
  defaultSessionId,
  defaultLevel,
}: RegistrationFormProps) {
  const [registrationType, setRegistrationType] = useState<RegistrationType>('privato');
  const formId = useId();
  const privacyId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const levelOptions = levels.map((level) => ({ value: level, label: level }));
  const sessionSelectOptions = sessions.map((session) => ({ value: session.id, label: session.label }));

  return (
    <div className="mx-auto w-full max-w-[800px]">
      <div className="mb-5 flex flex-wrap gap-2.5" role="tablist" aria-label="Tipo di iscrizione">
        {(
          [
            { id: 'privato' as const, label: 'Privato' },
            { id: 'azienda' as const, label: 'Azienda' },
          ] as const
        ).map((tab) => {
          const active = registrationType === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setRegistrationType(tab.id)}
              className={`min-w-[60px] px-2.5 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? 'bg-primary text-white'
                  : 'border border-[#aaa] bg-[#f7f7f7] text-[#1e1e1c] hover:border-primary/60'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <form id={formId} onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h2 className="font-heading text-[28px] font-semibold uppercase text-primary">
          {registrationType === 'privato' ? 'Iscrizione privati' : 'Iscrizione aziende'}
        </h2>

        <input type="hidden" name="tipo" value={registrationType} />
        <input type="hidden" name="corso" value={courseSlug} />

        <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
          <div className="flex min-w-[250px] flex-1 flex-col gap-2.5 px-2.5">
            {registrationType === 'azienda' && (
              <TextField id="ragioneSociale" label="Ragione sociale" required autoComplete="organization" />
            )}
            <TextField id="cognome" label="Cognome" required autoComplete="family-name" />
            <TextField id="nome" label="Nome" required autoComplete="given-name" />
            <TextField id="email" label="Email" type="email" required autoComplete="email" />
            <TextField id="telefono" label="Telefono" type="tel" required autoComplete="tel" />
            <TextField
              id="codiceFiscale"
              label={registrationType === 'azienda' ? 'P.IVA' : 'P.IVA / Codice fiscale'}
              required={registrationType === 'azienda'}
              autoComplete="off"
            />
          </div>

          <div className="flex min-w-[250px] flex-1 flex-col gap-2.5 px-2.5 lg:min-h-[415px]">
            <div className="flex w-full flex-col gap-1">
              <span className="font-heading text-2xl font-semibold uppercase tracking-[0.04em] text-[#1e1e1c]">
                Corso<span className="text-primary">*</span>
              </span>
              <div className={`${inputClassName} flex h-[42px] items-center text-[#999]`}>{courseTitle}</div>
            </div>

            {levelOptions.length > 0 && (
              <SelectField
                id="livello"
                label="Livello"
                placeholder="Seleziona il livello"
                options={levelOptions}
                defaultValue={defaultLevel}
              />
            )}

            <SelectField
              id="data"
              label="Data"
              required
              placeholder="Seleziona una delle date disponibili"
              options={sessionSelectOptions}
              defaultValue={defaultSessionId}
            />

            <div className="flex min-h-[120px] flex-1 flex-col gap-1 lg:min-h-0">
              <FieldLabel htmlFor="note">Note</FieldLabel>
              <textarea id="note" name="note" rows={5} className={`${inputClassName} min-h-[120px] flex-1 resize-y`} />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2.5 px-2.5">
          <input
            id={privacyId}
            name="privacy"
            type="checkbox"
            required
            className="mt-0.5 size-5 shrink-0 border border-[#aaa] bg-[#f7f7f7] accent-primary"
          />
          <label htmlFor={privacyId} className="text-base leading-normal text-[#444]">
            Ho letto e accetto i termini e condizioni riportati nella{' '}
            <Link href="#" className="text-primary underline">
              Privacy Policy
            </Link>
            <span className="text-primary">*</span>
          </label>
        </div>

        <div className="flex justify-center py-2.5">
          <button
            type="submit"
            className="relative bg-primary px-5 py-2.5 text-base font-bold uppercase text-white transition hover:bg-[#e55812] clipped-bottom-left-low"
          >
            Iscriviti al corso
          </button>
        </div>
      </form>
    </div>
  );
}
