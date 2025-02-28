import { JSX } from "react";
import { Music, Heart, User, Settings, Users, HelpCircle, Grid } from "lucide-react";

type MenuItem = {
    name: string;
    icon: JSX.Element;
  }

export const menuItems: MenuItem[] = [
    { name: "Dashboard", icon: <Grid size={20} /> },
    { name: "Álbum", icon: <Music size={20} /> },
    { name: "Artista", icon: <User size={20} /> },
    { name: "Músicas", icon: <Music size={20} /> },
    { name: "Favoritos", icon: <Heart size={20} /> },
  ];

 export const supportItems: MenuItem[] = [
    { name: "Configurações", icon: <Settings size={20} /> },
    { name: "Comunidade", icon: <Users size={20} /> },
    { name: "Ajuda e Suporte", icon: <HelpCircle size={20} /> },
  ];