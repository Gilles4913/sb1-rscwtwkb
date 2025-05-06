import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (key: string, ...rest: any[]) => void;
  }
}

declare global {
  interface Window {
    gtag: (key: string, ...rest: any[]) => void;
  }
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Send page view to Google Analytics
    window.gtag('event', 'page_view', {
      page_path: pathname,
    });
    
    // Send page view to Google Analytics
    window.gtag('event', 'page_view', {
      page_path: pathname,
    });
    
    // Update meta tags based on current route
    const routeMetaTags = {
      '/': {
        title: 'A2Display | Solutions d\'affichage dynamique et interactif pour collectivités et entreprises',
        description: 'Expert en affichage légal numérique, panneaux LED et bornes interactives. Solutions sur-mesure pour mairies, résidences seniors et entreprises. Support 100% français.'
      },
      '/software': {
        title: 'Logiciel d\'affichage dynamique professionnel | A2Display',
        description: 'Découvrez notre logiciel d\'affichage dynamique simple et puissant. Gestion centralisée, planification intuitive, et diffusion multi-écrans pour tous vos besoins.'
      },
      '/secteur/collectivites': {
        title: 'Affichage légal numérique pour mairies et collectivités | A2Display',
        description: 'Solutions d\'affichage légal numérique pour mairies : bornes tactiles, panneaux LED et écrans d\'information. Conformité garantie et support 100% français.'
      },
      '/secteur/residences-seniors': {
        title: 'Affichage dynamique pour résidences seniors | A2Display',
        description: 'Solutions d\'affichage adaptées aux résidences seniors : animations, informations, lien social. Écrans et bornes tactiles pour le bien-être des résidents.'
      },
      '/secteur/corporate': {
        title: 'Affichage dynamique pour entreprises | A2Display',
        description: 'Communication interne digitale pour entreprises. Écrans d\'information, bornes d\'accueil et solutions d\'affichage professionnel pour tous vos espaces.'
      },
      '/secteur/sport': {
        title: 'Affichage dynamique pour clubs et installations sportives | A2Display',
        description: 'Solutions d\'affichage LED et écrans pour clubs sportifs. Scores, sponsors, planning des matchs et communication dynamique pour vos installations.'
      },
      '/secteur/retail': {
        title: 'Affichage dynamique pour commerces et points de vente | A2Display',
        description: 'Vitrine digitale et écrans d\'affichage pour commerces. Boostez vos ventes avec des solutions d\'affichage dynamique adaptées au retail.'
      },
      '/materiel': {
        title: 'Écrans professionnels et matériel d\'affichage dynamique | A2Display',
        description: 'Écrans professionnels, bornes tactiles, totems et panneaux LED. Matériel professionnel garanti pour l\'affichage dynamique intérieur et extérieur.'
      },
      '/contact': {
        title: 'Contactez A2Display | Expert en affichage dynamique',
        description: 'Besoin d\'informations sur nos solutions d\'affichage dynamique ? Contactez nos experts pour un conseil personnalisé ou une démonstration.'
      }
    };

    const currentRoute = routeMetaTags[pathname] || routeMetaTags['/'];
    
    document.title = currentRoute.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentRoute.description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', currentRoute.title);
    if (ogDescription) ogDescription.setAttribute('content', currentRoute.description);

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterTitle) twitterTitle.setAttribute('content', currentRoute.title);
    if (twitterDescription) twitterDescription.setAttribute('content', currentRoute.description);
  }, [pathname]);

  return null;
}
