import LinkButton from "../ui/Linkbutton";

export default function NewsletterBanner() {
  return (
    <section className="overflow-hidden bg-primary px-6 py-8 text-white sm:px-8 lg:px-10 lg:py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <div className="space-y-2 uppercase">
          <p className="font-heading text-[24px] font-semibold tracking-[0.04em]">
            Ti interessano nuove notizie?
          </p>

          <h2 className="font-heading text-[32px] font-bold leading-none sm:text-[36px]">
            Iscriviti alla newsletter!
          </h2>
        </div>

        <form className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <label htmlFor="newsletter-email" className="sr-only">
            Indirizzo e-mail
          </label>

          <input
            id="newsletter-email"
            type="email"
            placeholder="Indirizzo e-mail"
            className="w-full border border-[#aaaaaa] bg-[#f7f7f7] px-4 py-3 text-[16px] text-[#1e1e1c] outline-none sm:max-w-105"
          />

          <button
            type="submit"
            className="border-2 border-[#1e1e1c] bg-white px-5 py-3 text-[16px] font-bold uppercase text-[#1e1e1c]"
          >
            Iscriviti
          </button>
        </form>
      </div>
    </section>
  );
}