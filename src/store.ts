import { atom } from 'nanostores';

import { Box, Home, User, Settings, Server, ServerCog, Database } from "lucide-astro"

export const nav = atom([
    {Ico: Home, href: "/dasboard"},
    {Ico: Server, href: "/dasboard/front-end"},
    {Ico: ServerCog, href: "/dasboard/back-end"},
    {Ico: Database, href: "/dasboard/base-de-datos"},
    {Ico: Box, href: "/dasboard/construir"},
    {Ico: Settings, href: "/dasboard/configuracion"},
])

export const isOpen = atom(false);