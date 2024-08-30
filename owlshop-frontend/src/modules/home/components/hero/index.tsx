import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div 
      className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dwrwykcqq/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1722879250/Group_761_huq6vm.png')",
         backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Welcome to OWLSHOP!
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Merch store by Orangewood Labs
          </Heading>
        </span>
        <a
          href="https://www.orangewood.co/"
          target="_blank"
        >
          <h1 style={{ textDecoration: "underline" }}>
            Visit Orangewood Labs!
          </h1>
        </a>
      </div>
    </div>
  )
}

export default Hero
