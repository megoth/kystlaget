/// <reference types="@sanity-codegen/types" />

declare namespace Sanity {
  namespace Schema {
    /**
     * Historie
     */
    interface Event extends Sanity.Document {
      _type: "event";

      /**
       * Navn - `String`
Nødvendig
       */
      name?: string;

      /**
       * Forkortelse - `String`
       */
      short?: string;

      /**
       * År - `Date`
Nødvendig
       */
      year?: string;

      /**
       * Dato - `Date`
Hvis man vet nøyaktig dato
       */
      date?: string;

      /**
       * Stor hendelse - `Boolean`
       */
      major?: boolean;

      /**
       * Slug - `Slug`
Nødvendig
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Beskrivelse - `Array`
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;

      /**
       * Kilder - `Array`
Helst en eller flere
       */
      sources?: Array<Sanity.Keyed<Source>>;
    }

    /**
     * Site Settings
     */
    interface SiteSettings extends Sanity.Document {
      _type: "siteSettings";

      /**
       * Sidens tittel - `String`
       */
      title?: string;

      /**
       * Beskrivelse av siden - `Text`
       */
      description?: string;

      /**
       * Hovedmeny - `RegistryReference`
       */
      mainNav?: Navigation;

      /**
       * Tekst i foten - `Array`
       */
      footer?: Array<Sanity.Keyed<Sanity.Block>>;
    }

    /**
     * Side
     */
    interface Page extends Sanity.Document {
      _type: "page";

      /**
       * Navn - `String`
Nødvendig
       */
      name?: string;

      /**
       * Tittel - `String`
       */
      title?: string;

      /**
       * Slug - `Slug`
Nødvendig
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Foreldreside - `RegistryReference`
       */
      parent?: ParentPage;

      /**
       * Beskrivelse - `Text`
       */
      description?: string;

      /**
       * Presentasjon som hendelse - `RegistryReference`
Om du ønsker å ha med teksten i tidslinjen, fyll ut informasjonen her
       */
      event?: PageEvent;

      /**
       * Innhold - `Array`
       */
      components?: Array<
        | Sanity.Keyed<TextComponent>
        | Sanity.Keyed<ButtonComponent>
        | Sanity.Keyed<ButtonsComponent>
        | Sanity.Keyed<DataComponent>
        | Sanity.Keyed<GroupComponent>
        | Sanity.Keyed<FileComponent>
        | Sanity.Keyed<ImageComponent>
        | Sanity.Keyed<SubpagesComponent>
      >;
    }

    /**
     * Album
     */
    interface Album extends Sanity.Document {
      _type: "album";

      /**
       * Navn - `String`
Nødvendig
       */
      name?: string;

      /**
       * Slug - `Slug`
Nødvendig
       */
      slug?: {
        _type: "slug";
        current: string;
      };

      /**
       * Dato - `Date`
Nødvendig om albumet skal vises på historie-siden.
       */
      date?: string;

      /**
       * Bilder - `Array`
Øverste bildet vil bli thumbnail for album
       */
      images?: Array<Sanity.Keyed<Photo>>;
    }

    /**
     * Person
     */
    interface Person extends Sanity.Document {
      _type: "person";

      /**
       * Navn - `String`
Nødvendig
       */
      name?: string;

      /**
       * Bilde - `Image`
       */
      image?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };
    }

    /**
     * Organisasjon
     */
    interface Association extends Sanity.Document {
      _type: "association";

      /**
       * Navn - `String`
Nødvendig
       */
      name?: string;

      /**
       * Logo - `Image`
       */
      logo?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };
    }

    /**
     * Gruppe
     */
    interface Group extends Sanity.Document {
      _type: "group";

      /**
       * Navn - `String`
Nødvendig
       */
      name?: string;

      /**
       * Beskrivelse - `Array`
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;

      /**
       * Medlemmer - `Array`
       */
      members?: Array<Sanity.Keyed<Membership>>;
    }

    type BlockContent = Array<
      | Sanity.Keyed<Sanity.Block>
      | Sanity.Keyed<{
          asset: Sanity.Asset;
          crop?: Sanity.ImageCrop;
          hotspot?: Sanity.ImageHotspot;
        }>
    >;

    type Source = {
      _type: "source";

      /**
       * Navn - `String`
Nødvendig
       */
      text?: string;

      /**
       * Lenke - `Url`
       */
      url?: string;
    };

    type PageEvent = {
      _type: "pageEvent";

      /**
       * Navn - `String`
Teksten som vil vises i tidslinjen
       */
      name?: string;

      /**
       * Dato - `Date`
Nødvendig om teksten skal vises i tidslinjen.
       */
      date?: string;

      /**
       * Stor hendelse - `Boolean`
       */
      major?: boolean;
    };

    type ButtonComponent = {
      _type: "button-component";

      /**
       * Tekst - `String`
Nødvendig
       */
      text?: string;

      /**
       * Lenke - `RegistryReference`
       */
      link?: Link;

      /**
       * Type knapp - `String`
       */
      variant?: "primary";
    };

    type ButtonsComponent = {
      _type: "buttons-component";

      /**
       * Knapper - `Array`
       */
      buttons?: Array<Sanity.Keyed<ButtonComponent>>;
    };

    type DataComponent = {
      _type: "data-component";

      /**
       * Type - `String`
Data må lenkes opp mot siden via kode
       */
      type?: "albums" | "events" | "pageUpdates" | "subpages";
    };

    type GroupComponent = {
      _type: "group-component";

      /**
       * Gruppe - `Reference`
Nødvendig
       */
      group?: Sanity.Reference<Group>;
    };

    type FileComponent = {
      _type: "file-component";

      /**
       * Filnavn - `String`
       */
      name?: string;

      /**
       * Fil - `File`
       */
      file?: {
        asset: Sanity.Asset;
      };
    };

    type ImageComponent = {
      _type: "image-component";

      /**
       * Bilde - `RegistryReference`
       */
      photo?: Photo;
    };

    type SubpagesComponent = {
      _type: "subpages-component";

      /**
       * Sorter motsatt - `Boolean`
       */
      sortReverse?: boolean;
    };

    type TextComponent = {
      _type: "text-component";

      /**
       * Tekst - `Array`
Nødvendig
       */
      text?: Array<Sanity.Keyed<Sanity.Block>>;

      /**
       * Type tekst - `String`
       */
      variant?: "large";
    };

    type Link = {
      _type: "link";

      /**
       * Lenke til intern side - `Reference`
Select pages for navigation
       */
      internalLink?: Sanity.Reference<Page>;

      /**
       * Lenke til ekstern side - `String`
       */
      externalUrl?: string;
    };

    type NavigationItem = {
      _type: "navigationItem";

      /**
       * Lenketekst - `String`
       */
      text?: string;

      /**
       * Hvor lenken skal gå - `RegistryReference`
       */
      navigationItemUrl?: Link;
    };

    type Navigation = {
      _type: "navigation";

      /**
       * Meny elementer - `Array`
       */
      items?: Array<Sanity.Keyed<NavigationItem>>;
    };

    type Photo = {
      _type: "photo";

      /**
       * Bilde - `Image`
Nødvendig
       */
      image?: {
        asset: Sanity.Asset;
        crop?: Sanity.ImageCrop;
        hotspot?: Sanity.ImageHotspot;
      };

      /**
       * Kort beskrivelse - `String`
Nødvendig
       */
      alt?: string;

      /**
       * Lang beskrivelse - `Array`
       */
      description?: Array<Sanity.Keyed<Sanity.Block>>;
    };

    type ParentPage = {
      _type: "parentPage";

      /**
       * Side - `Reference`
       */
      page?: Sanity.Reference<Page>;

      /**
       * Rekkefølge indeks - `Number`
Hvilken rekkefølge skal siden ha? (0 og oppover)
       */
      orderNo?: number;

      /**
       * Rekkefølge dato - `Date`
Alternativt kan du bruke dato for rekkefølge
       */
      date?: string;
    };

    type Membership = {
      _type: "membership";

      /**
       * Person - `Reference`
       */
      person?: Sanity.Reference<Person>;

      /**
       * Organisasjon - `Reference`
       */
      association?: Sanity.Reference<Association>;

      /**
       * Notat - `String`
       */
      note?: string;
    };

    type Document =
      | Event
      | SiteSettings
      | Page
      | Album
      | Person
      | Association
      | Group;
  }
}
