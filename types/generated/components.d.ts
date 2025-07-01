import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAbout extends Struct.ComponentSchema {
  collectionName: 'about';
  info: {
    displayName: 'About us';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksCardCarousel extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_carousels';
  info: {
    displayName: 'Card Carousel';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksFeatures extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    links: Schema.Attribute.Component<'elements.link', true>;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksIndustry extends Struct.ComponentSchema {
  collectionName: 'industry';
  info: {
    displayName: 'Industry';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.title', true>;
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksKpiCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_kpi_cards';
  info: {
    displayName: 'kpi-card';
    icon: 'feather';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksMainHeaderDesc extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headings_desc';
  info: {
    displayName: 'Heading_Desc';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksPartner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_partners';
  info: {
    displayName: 'partner';
  };
  attributes: {
    logo: Schema.Attribute.Component<'elements.project-logo', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksProjects extends Struct.ComponentSchema {
  collectionName: 'projects';
  info: {
    displayName: 'projects';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icons: Schema.Attribute.Component<'elements.project-logo', false>;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'elements.bullets', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsBullets extends Struct.ComponentSchema {
  collectionName: 'components_elements_bullets';
  info: {
    displayName: 'bullets';
  };
  attributes: {
    description: Schema.Attribute.Component<'elements.description', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsDescription extends Struct.ComponentSchema {
  collectionName: 'components_elements_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {
    desc: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsListsString extends Struct.ComponentSchema {
  collectionName: 'components_elements_lists_strings';
  info: {
    displayName: 'lists-string';
  };
  attributes: {};
}

export interface ElementsProjectLogo extends Struct.ComponentSchema {
  collectionName: 'project_icon';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ElementsTitle extends Struct.ComponentSchema {
  collectionName: 'components_elements_title';
  info: {
    displayName: 'title';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about': BlocksAbout;
      'blocks.card-carousel': BlocksCardCarousel;
      'blocks.features': BlocksFeatures;
      'blocks.heading': BlocksHeading;
      'blocks.hero': BlocksHero;
      'blocks.industry': BlocksIndustry;
      'blocks.kpi-card': BlocksKpiCard;
      'blocks.main-header-desc': BlocksMainHeaderDesc;
      'blocks.partner': BlocksPartner;
      'blocks.projects': BlocksProjects;
      'blocks.services': BlocksServices;
      'elements.bullets': ElementsBullets;
      'elements.card': ElementsCard;
      'elements.description': ElementsDescription;
      'elements.link': ElementsLink;
      'elements.lists-string': ElementsListsString;
      'elements.project-logo': ElementsProjectLogo;
      'elements.title': ElementsTitle;
    }
  }
}
