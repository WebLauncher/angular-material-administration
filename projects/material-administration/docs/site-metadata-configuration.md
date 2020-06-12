# Setup site metadata configuration

For generating the administration app the library needs the metadata definition for configurations needed.

In your app folder create a file called `site-metadata.ts`. 

## Basic site metadata

Site metadata is a JS constant object that describes the configuration needed to generate the app UI. It is an implementation of interface `MatAdministrationMetadata`.

This is basic implementation:

~~~ts
import { MatAdministrationMetadata, EntityFieldType, EntityFieldInputType } from '@weblauncher/material-administration';

export const SiteMetadata: MatAdministrationMetadata = {
  // configurations to be added here
}
~~~

## Defining entities

Entities are data collections configurations map object that contain `MatAdministrationEntity` configuration objects.

This is an example of defining a `news` entity in root of site metadata:

~~~ts
export const SiteMetadata: MatAdministrationMetadata = {
  entities: {
    news: { // this is the entity object defined (this would be the collection name in NO-SQL database or table name in SQL databases)
      // there are some per entity configuration like below
      single: 'news',
      plural: 'news',
      autoTimestamps: true,

      // each entity will have fields map (like columns in Sql data surces)
      fields: {
        sport: {
          inputType: EntityFieldInputType.Select,
          data: {
            type: 'collection',
            collection: 'sports',
            collectionValue: 'id',
            collectionLabel: 'name'
          }
        },
        title: 'title',
        content: {
          hideInList: true,
          inputType: EntityFieldInputType.Ckeditor
        },
        imageUrl: {
          label: 'Image',
          inputType: EntityFieldInputType.Image,
          format: 'image',
          filePathField: 'imageUrlPath',
          style: {
            list: { height: '100px' }
          }
        },
        created: {
          showInList: true
        }
      },

      // sub-entities if needed
      entities: {
        // each entity can have sub-entities 
        // (this is recommended only when using NO-Sql data sources like Firestore)
      }
    }
  }
};
~~~

## Defining fields

Each entity will have a fields map configuration. In SQL datasources these would represent collumns in tables.

### Simple field definition

A field configuration can be just a string name like `title`. See above entity definition. This will apply default field configuration settings.

### Complex field definition

A field configuration can be and avanced object implementation of `MatAdministrationEntityField` that would allow more complex configuration of field details in the app. See `sport`, `content` and `imageUrl` as examples for the complex configuration.

[Read more details about complex field configuration here](./field-configurations.md)
