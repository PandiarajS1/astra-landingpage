import Image from "next/image";
import { ArrowRight, ChevronRight, User, Zap } from "lucide-react";
import { Container, Icons, Wrapper } from "@/components";
import { Button} from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, pricingCards, reviews } from "@/constants";
import { Card, CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { LampContainer } from "@/components/ui/lamp";
import { Input } from "@/components/ui/input";


const HomePage = () => {

    const firstrow = reviews.slice(0,reviews.length/2)
    const secondrow = reviews.slice(reviews.length/2)

    return (
        <section
            className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8"
        >
            <Wrapper>
            <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

                <Container>
                    <div className="flex flex-col items-center justify-center py-20 w-full">
                    <button className="group relative grid overflow-hidden rounded-full px-4 
                    py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] 
                                w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] 
                                before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] 
                                before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] 
                                before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors 
                            duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr 
                            from-primary/40"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                                <Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                                Introducing Astra AI
                                <ChevronRight className="w-4 h-4" />
                            </span>
                        </button>

                        <div className="flex flex-col items-center max-w-3xl mt-8 mx-auto w-11/12">
                            <h1 className="text-4xl md:text-6xl text-center font-semibold bg-clip-text bg-gradient-to-b
                            from-gray-50 to-gray-100 text-transparent">
                                Build your next idea and ship your dream site
                            </h1>

                            <p className="text-base md:text-lg text-foreground/80 mt-5 text-center">
                                Zero code, maximum speed, Made professional sites easy, fast and fun while delivering best-in-class SEO, performance.
                            </p>
                            <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                            <Link href="/" className="hidden md:flex justify-center w-max rounded-full border-t border-foreground/30 
                            bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 md:gap-8 shadow-2xl shoadow-foreground/40 cursor-pointer select-none">
                                <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:marker:pr-0">
                                ✨{" "}Start building your dream website now!
                                </p>
                                <Button size="sm" className="rounded-full hidden lg:flex border border-forground/20">
                                    Get Started
                                    <ArrowRight className="w-4 h-4 ml-1"/>
                                </Button>
                            </Link>
                            </div>

                            <div className=" relative flex items-center py-10 md:py-20 w-full">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 gradient w-3/4 inset-0 blur-[10rem]"></div>
                                <div className="-m-2 md:-m-4 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:rounded-2xl bg-opacity-50 backdrop-blur-lg">
                                    <Image 
                                        src="/assets/dashboard.svg" 
                                        alt="dashboard"
                                        width={1200}
                                        height={1200}
                                        className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                                        />
                                    <BorderBeam 
                                        size={250}
                                        delay={9}
                                        duration={12}
                                    />    
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        {/* the process */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container className="max-w-md md:mx-auto text-start md:text-center">
                    <SectionBadge
                        title="The Process"
                    />
                    <h1 className="text-3xl lg:text-4xl font-semibold mt-6">
                        three steps to build your dream websites
                    </h1>
                    <p className="text-muted-foreground mt-6">
                        turn your vision into reality in just 3 simple steps
                    </p>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x 
                        divide-y md:divide-y-0 divide-gray-900 lg:first:border-none first:border-gray-900">
                        {
                            perks.map((perk)=>(
                                <div key={perk.title} className="flex flex-col items-start px-4 py-4 md:px-6 
                                lg:px-8 items-start lg:py-6">
                                    <div className="flex items-center justify-center">
                                        <perk.icon className="w-8 h-8"/>
                                    </div>    
                                    <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                                    <p className="text-muted-foreground mt-2 text-start">{perk.info}</p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </Container>
            </Wrapper>
        
        {/* features */}

        <Wrapper className="flex flex-col intems-center justify-center py-12 relative">
            <Container>
                <div className="max-w-md md:mx-auto text-start md:text-center">
                        <SectionBadge 
                            title="Features"
                        />
                        <h1 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Discover our powerful features
                        </h1>
                        <p className="text-muted-foreground mt-6">
                            Astra offers a range of features to help you build a stunning websites in no time
                        </p>
                </div>
            </Container>
            <Container>
                <div className="flex flex-col items-center justify-center mt-8">
                    <Icons.feature className="w-auto h-80"/>
                </div>
            </Container>
            <Container>
                <div className="flex flex-col justify-center items-center py-10 md:py-20 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                        {features.map((feature)=>(
                            <div className="flex flex-col items-start px-10">
                                <div className="flex items-center justify-center">
                                    <feature.icon className="w-8 h-8"/>
                                </div>
                                <h1 className="text-lg font-medium mt-6">
                                    {feature.title}
                                </h1>
                                <p className="text-muted-foreground mt-2 text-start">
                                    {feature.info}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Wrapper>

        {/* pricing */}
        <Wrapper className="lflex flex-col justify-center items-center py-12 relative">
            <Container>
                <div className="max-w-md md:mx-auto text-start md:text-center">
                    <SectionBadge
                        title="Pricing"
                    />
                    <h1 className="text-3xl lg:text-4xl mt-6 font-semibold">
                        Unlock the right for your business 
                    </h1>
                    <p className="text-muted-foreground mt-6">
                        Choose the best plan for your business and start building your dream website today
                    </p>
                </div>
            </Container>
            <Container className="flex justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 
                py-10 md:py-20 flex-wrap max-w-4xl">
                    {pricingCards.map((card)=>(
                        <Card
                            key={card.title}
                            className={cn("flex flex-col w-full border-neutral-700",
                            card.title==="Unlimited Saas" && "border-2 border-primary")}
                        >
                            <CardHeader className="border-2 border-border">
                                <span>{card.title}</span>
                                <CardTitle className={cn(card.title!=="Unlimited Saas" && "text-muted-foreground")}>
                                    {card.price}
                                </CardTitle>
                                <CardDescription>
                                    {card.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-6 space-y-3">
                                {card.features.map((feature)=>(
                                    <div className="flex item-center gap-2">
                                    <Zap className="w-4 h-4 text-primary fill-primary"/>
                                    <p>{feature}</p>
                                </div>
                                ))}
                            </CardContent>
                            <CardFooter className="mt-auto w-full">
                                <Link 
                                    href="#"
                                    className={cn("w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium"
                                        ,card.title!=="Unlimited Saas" && "!bg-foreground !text-background")}
                                >
                                    {card.buttonText}
                                </Link>
                                
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Container>
        </Wrapper>
        <Wrapper className="flex flex-col intems-center justify-center py-12 relative">
            <Container>
                <div className="max-w-md md:mx-auto text-start md:text-center">
                        <SectionBadge 
                            title="Our Customers"
                        />
                        <h1 className="text-3xl lg:text-4xl font-semibold mt-6">
                            What people are saying
                        </h1>
                        <p className="text-muted-foreground mt-6">
                            See how Astra empowers business of all sies. Here's what real people are saying on twitter
                        </p>
                </div>
            </Container>
            <Container>
                <div className="py-10 md:py-20 w-full">
                    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden py-10">
                        <Marquee pauseOnHover className="[--duration:20s] select-none">
                            {firstrow.map((review)=>(
                                <figure
                                    key={review.name}
                                    className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4
                                    border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15]"
                                >
                                    <div className="flex flex-row items-center gap-2">
                                        <User className="w-6 h-6"/>
                                        <div className="flex flex-col">
                                            <figcaption className="text-sm font-medium">
                                                {review.name}
                                            </figcaption>
                                            <p className="text-sm font-medium text-muted-foreground">
                                                {review.username}
                                            </p>
                                        </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">
                                            {review.body}
                                        </blockquote>


                                </figure>
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                            {secondrow.map((review)=>(
                                <figure
                                    key={review.name}
                                    className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4
                                    border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15]"
                                >
                                    <div className="flex flex-row items-center gap-2">
                                        <User className="w-6 h-6"/>
                                        <div className="flex flex-col">
                                            <figcaption className="text-sm font-medium">
                                                {review.name}
                                            </figcaption>
                                            <p className="text-sm font-medium text-muted-foreground">
                                                {review.username}
                                            </p>
                                        </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">
                                            {review.body}
                                        </blockquote>
                                </figure>
                            ))}
                        </Marquee>
                        <div className="poiner-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"/>
                        <div className="poiner-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"/>
                    </div>
                </div>
            </Container>
        </Wrapper>

        {/* newsletter */}

        <Wrapper>
            <Container>
                <LampContainer>
                    <div className="flex flex-col justify-center items-center relative w-full text-center">
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">From Idea to Launch <br/>
                            Faster Than Ever</h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                            Build stunning websites with Astra's intuitive drag-and-drop builder and powerful AI assistant
                            </p>
                            <Button
                                variant="white"
                                className="mt-6"
                                asChild
                            >
                                <Link href="/sign-in" className="gap-2">
                                Get started for free
                                <ArrowRight className="w-4 h-4"/>
                                </Link>
                            </Button>
                    </div>
                </LampContainer>
            </Container>
            <Container className="relative ">
            <div className="flex items-center justify-center w-full -mt-40">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                            <div className="flex flex-col items-start gap-4 w-full">
                                <h4 className="text-xl md:text-2xl font-semibold">
                                    Join our newsletter
                                </h4>
                                <p className="text-base text-muted-foreground">
                                    Be up to date with everything about AI builder
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                                <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                                    <Input
                                        required
                                        type="email"
                                        placeholder="Enter your email"
                                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                                    />
                                    <Button type="submit" size="sm" variant="secondary" className="w-full md:w-max">
                                        Subscribe
                                    </Button>
                                </form>
                                <p className="text-xs text-muted-foreground">
                                    By subscribing you agree with our{" "}
                                    <Link href="#">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>
                </div>
            </Container>
        </Wrapper>

        </section>


    )
};

export default HomePage;


