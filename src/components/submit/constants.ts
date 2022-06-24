import { EnumRepositoryKeys, IRepository } from "@/components/submissions/types";

export const repoMetadata: { [key: string]: IRepository } = {
  [EnumRepositoryKeys.hydroshare]: {
    key: EnumRepositoryKeys.hydroshare,
    name: 'HydroShare',
    logoSrc: require('@/assets/img/hydroshare.png'),
    description: 'A dependable data management and publication solution for hydrologic data types and models.',
    submitTooltip: 'Submit a dataset to the HydroShare repository.',
    isSupported: true,
    hasFolderStructure: true,
    url: 'https://www.hydroshare.org',
    supportUrl: 'https://help.hydroshare.org/'
  },
  [EnumRepositoryKeys.earthchem]: {
    key: EnumRepositoryKeys.earthchem,
    name: 'EarthChem Library',
    logoSrc: require('@/assets/img/earthchem.png'),
    description: 'EarthChem provides open data services to the geochemical, petrological, mineralogical, and related communities. Services include data preservation, discovery, access, and visualization.',
    submitTooltip: 'Submit a dataset to the EarthChem repository.',
    isSupported: true,
    url: 'https://www.earthchem.org',
    supportUrl: 'https://www.earthchem.org/resources/support/',
    supportedFileTypes: [
      '.csv',
      '.doc',
      '.kml',
      '.pdf',
      '.asc',
      '.txt',
      '.bin',
      '.xls',
      '.xlsx',
      '.bmp',
      '.xlsm',
      '.xml',
      '.jpg',
      '.zip',
      '.jgw',
      '.f',
      '.gif',
      '.h5',
      '.tar.gz',
      '.docx',
      '.html',
      '.ipynb',
      '.png',
      '.m',
      '.nc',
      '.ppt',
      '.ps',
      '.tiff',
      '.tsv',
      '.md',
      '.jpeg',
      '.js',
      '.json',
      '.HEIC',
      '.pptx',
      '.tif',
      '.geojson',
      '.rdf',
      '.hdf',
    ],
    maxNumberOfFiles: 20,
    maxUploadSizePerFile: 52428800, // 50 MB = 52428800 Bytes
    maxUploadSizePerFileBase10: 50000000, // 50 MB = 52428800 Bytes
    maxTotalUploadSize: 419430400, // 400 MB = 419430400 Bytes,
    fileNameRegex: /^[-_()\w\s]*$/,  // File names can only contain upper or lowercase letters, numbers, spaces, _(underscores), -(dashes) and parenthesis().
  },
  [EnumRepositoryKeys.zenodo]: {
    key: EnumRepositoryKeys.zenodo,
    name: 'Zenodo',
    logoSrc: require('@/assets/img/zenodo.png'),
    description: 'Zenodo helps researchers receive credit by making the research results citable and through OpenAIRE integrates them into existing reporting lines to funding agencies like the European Commission.',
    submitTooltip: 'Submit a dataset to the Zenodo repository.',
    isSupported: true,
    url: 'https://www.zenodo.org',
    supportUrl: 'https://help.zenodo.org/'
  },
  [EnumRepositoryKeys.external]: {
    key: EnumRepositoryKeys.external,
    name: 'Register Dataset',
    dropdownName: 'Registered Datasets',
    logoSrc: '',
    description: 'We encourage you to submit your data to one of the supported repositories listed here. We know that these repositories may not be a good fit for every CZNet dataset. If you have submitted a dataset to a different repository, register that dataset here. Registering will create a metadata record for the dataset within the Data Submission Portal to ensure that your data can still be discovered with all of the other CZ Net research products.',
    isSupported: true,
    isExternal: true,
    submitTooltip: 'Register a dataset submitted to another repository.'
  },
  [EnumRepositoryKeys.sesar]: {
    key: EnumRepositoryKeys.sesar,
    name: 'System for Earth Sample Registration (SESAR)',
    logoSrc: require('@/assets/img/sesar.png'),
    description: `SESAR is a community platform that helps make samples more discoverable, accessible, and reusable, and connects samples with the knowledge ecosystem derived from them.`,
    submitTooltip: 'Submit a dataset to the SESAR repository.',
    isSupported: false,
    url: 'https://www.geosamples.org/',
  },
  [EnumRepositoryKeys.openTopography]: {
    key: EnumRepositoryKeys.openTopography,
    name: 'OpenTopography',
    logoSrc: require('@/assets/img/openTopography.png'),
    description: `The OpenTopography Community Dataspace allows users who are producing small to moderate sized topographic datasets (with technologies such as lidar and photogrammetry) to archive their data with OpenTopography`,
    submitTooltip: 'Submit a dataset to the OpenTopography repository.',
    isSupported: false,
    url: 'https://opentopography.org/',
  },
  [EnumRepositoryKeys.dryad]: {
    key: EnumRepositoryKeys.dryad,
    name: 'Dryad',
    logoSrc: require('@/assets/img/dryad.png'),
    description: `The Dryad Digital Repository is a curated resource that makes research data discoverable, freely reusable, and citable. Dryad provides a general-purpose home for a wide diversity of data types.`,
    submitTooltip: 'Submit a dataset to the Dryad repository.',
    isSupported: false,
    url: 'https://datadryad.org/stash/',
  },
  [EnumRepositoryKeys.pangaea]: {
    key: EnumRepositoryKeys.pangaea,
    name: 'Pangaea',
    logoSrc: require('@/assets/img/pangaea.png'),
    description: `The information system PANGAEA is operated as an Open Access library aimed at archiving, publishing and distributing georeferenced data from earth system research.`,
    submitTooltip: 'Submit a dataset to the Panagea repository.',
    isSupported: false,
    url: 'https://www.pangaea.de/',
  },
  [EnumRepositoryKeys.edi]: {
    key: EnumRepositoryKeys.edi,
    name: 'The Environmental Data Initiative (EDI)',
    logoSrc: require('@/assets/img/edi.png'),
    description: `We provide support, training, and resources to help archive and publish high-quality data and metadata. We operate a secure data repository and work closely with the LTER Network Communications Office and DataONE to promote data management best practices and stewardship.`,
    submitTooltip: 'Submit a dataset to The Environmental Data Initiative repository',
    isSupported: false,
    url: 'https://environmentaldatainitiative.org/',
  },
  [EnumRepositoryKeys.scienceBase]: {
    key: EnumRepositoryKeys.scienceBase,
    name: 'USGS ScienceBase',
    logoSrc: require('@/assets/img/scienceBase.png'),
    description: `The U.S. Geological Survey (USGS) is committed to enhancing and expanding information sharing and sound data management practices by developing ScienceBase, a collaborative scientific data and information management platform used directly by science teams.`,
    submitTooltip: 'Submit a dataset to the USGS ScienceBase repository',
    isSupported: false,
    url: 'https://www.sciencebase.gov/about/',
  },
  [EnumRepositoryKeys.osf]: {
    key: EnumRepositoryKeys.osf,
    name: 'OSF',
    logoSrc: require('@/assets/img/osf.png'),
    description: `OSF is a free, open source web application that connects and supports the research workflow, enabling scientists to increase the efficiency and effectiveness of their research. Researchers use OSF to collaborate, document, archive, share, and register research projects, materials, and data. OSF is the flagship product of the non-profit Center for Open Science.`,
    submitTooltip: 'Submit a dataset to the OSF repository.',
    isSupported: false,
    url: 'https://osf.io/',
  },
  [EnumRepositoryKeys.geo]: {
    key: EnumRepositoryKeys.geo,
    name: 'GEO',
    logoSrc: require('@/assets/img/geo.png'),
    description: `GEO is a public functional genomics data repository supporting MIAME-compliant data submissions. Array- and sequence-based data are accepted. Tools are provided to help users query and download experiments and curated gene expression profiles.`,
    submitTooltip: 'Submit a dataset to the GEO repository.',
    isSupported: false,
    url: 'https://www.ncbi.nlm.nih.gov/geo/',
  },
  [EnumRepositoryKeys.bioSample]: {
    key: EnumRepositoryKeys.bioSample,
    name: 'BioSample',
    logoSrc: require('@/assets/img/bioSample.png'),
    description: `The BioSample database stores submitter-supplied descriptive information, or metadata, about the biological materials from which data stored in NCBI’s primary data archives are derived. NCBI’s archives host data from diverse types of samples from any species, so the BioSample database is similarly diverse; typical examples of a BioSample include a cell line, a primary tissue biopsy, an individual organism or an environmental isolate.`,
    submitTooltip: 'Submit a dataset to the BioSample repository.',
    isSupported: false,
    url: 'https://www.ncbi.nlm.nih.gov/biosample/',
  },
  [EnumRepositoryKeys.sra]: {
    key: EnumRepositoryKeys.sra,
    name: 'Sequence Read Archive (SRA)',
    logoSrc: require('@/assets/img/sra.png'),
    description: `The SRA is NIH's primary archive of high-throughput sequencing data and is part of the International Nucleotide Sequence Database Collaboration (INSDC) that includes at the NCBI Sequence Read Archive (SRA), the European Bioinformatics Institute (EBI), and the DNA Database of Japan (DDBJ). Data submitted to any of the three organizations are shared among them.`,
    submitTooltip: 'Submit a dataset to the Sequence Read Archive repository.',
    isSupported: false,
    url: 'https://www.ncbi.nlm.nih.gov/sra/',
  },
  [EnumRepositoryKeys.itrdb]: {
    key: EnumRepositoryKeys.itrdb,
    name: 'NOAA International Tree-Ring Data Bank (ITRDB)',
    logoSrc: require('@/assets/img/itrdb.png'),
    description: `The World Data Service for Paleoclimatology manages the International Tree-Ring Data Bank (ITRDB), the world's largest public archive of tree ring data. Oversight is provided by the ITRDB Advisory Committee.`,
    submitTooltip: 'Submit a dataset to the NOAA International Tree-Ring Data Bank repository.',
    isSupported: false,
    url: 'https://www.ncei.noaa.gov/products/paleoclimatology/tree-ring',
  },
  [EnumRepositoryKeys.gitHub]: {
    key: EnumRepositoryKeys.gitHub,
    name: 'GitHub',
    logoSrc: require('@/assets/img/github.png'),
    description: `GitHub is a provider of Internet hosting for software development and version control using Git. GitHub provides access control and several collaboration features such as bug tracking, feature requests, task management, continuous integration, and wikis for every project.`,
    submitTooltip: 'Create a repository in GitHub.',
    isSupported: false,
    url: 'https://www.github.com',
  },
  [EnumRepositoryKeys.ameriFlux]: {
    key: EnumRepositoryKeys.ameriFlux,
    name: 'AmeriFlux',
    logoSrc: require('@/assets/img/ameriflux.png'),
    description: `AmeriFlux is a network of PI-managed sites measuring ecosystem CO2, water, and energy fluxes in North, Central and South America. It was established to connect research on field sites representing major climate and ecological biomes, including tundra, grasslands, savanna, crops, and conifer, deciduous, and tropical forests.`,
    submitTooltip: 'Submit data to Ameriflux.',
    isSupported: false,
    url: 'https://ameriflux.lbl.gov/',
  },
  [EnumRepositoryKeys.hydrolearn]: {
    key: EnumRepositoryKeys.hydrolearn,
    name: 'HydroLearn',
    logoSrc: require('@/assets/img/hydrolearn.png'),
    description: `HydroLearn is an education project funded by the National Science Foundation to promote the collaborative development and adoption of active-learning resources in hydrology and water resources engineering.`,
    submitTooltip: 'Submit data to HydroLearn.',
    isSupported: false,
    url: 'https://www.hydrolearn.org/',
  },
}