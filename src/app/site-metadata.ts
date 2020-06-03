import { MatAdministrationMetadata, EntityFieldType, EntityFieldInputType } from '@weblauncher/material-administration';

export const SiteMetadata: MatAdministrationMetadata = {
  timestampFormat: 'medium',
  entities: {
    news: {
      single: 'news',
      plural: 'news',
      createdTimestamp: 'created',
      updatedTimestamp: 'updated',
      autoTimestamps: true,
      fields: {
        id: 'id',
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
          type: EntityFieldType.Timestamp
        },
        updated: {
          type: EntityFieldType.Timestamp
        }
      },
      entities: {
        images: {
          single: 'image',
          plural: 'images',
          createdTimestamp: 'created',
          updatedTimestamp: 'updated',
          fields: {
            title: 'title',
            imageUrl: {
              label: 'Image',
              inputType: EntityFieldInputType.Image,
              format: 'image',
              filePathField: 'imageUrlPath'
            },
            created: {
              type: EntityFieldType.Timestamp
            },
            updated: {
              type: EntityFieldType.Timestamp
            }
          }
        },
        comments: {
          single: 'comment',
          plural: 'comments',
          createdTimestamp: 'created',
          updatedTimestamp: 'updated',
          fields: {
            title: 'title',
            content: 'content',
            created: {
              type: EntityFieldType.Timestamp
            },
            updated: {
              type: EntityFieldType.Timestamp
            }
          }
        }
      }
    },
    events: {
      single: 'event',
      plural: 'events',
      showMenuDividerAfter: true,
      createdTimestamp: 'created',
      updatedTimestamp: 'updated',
      fields: {
        id: 'id',
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
        description: {
          hideInList: true,
          inputType: EntityFieldInputType.Ckeditor
        },
        start: {
          type: EntityFieldType.Timestamp,
          inputType: 'datepicker'
        },
        end: {
          type: EntityFieldType.Timestamp,
          inputType: 'datepicker'
        },
        created: {
          type: EntityFieldType.Timestamp
        },
        updated: {
          type: EntityFieldType.Timestamp
        }
      }
    },
    users: {
      single: 'user',
      plural: 'users',
      titleField: 'email',
      fields: {
        id: 'id',
        email: 'email',
        displayName: 'displayName'
      }
    },
    sports: {
      single: 'sport',
      plural: 'sports',
      hideList: true,
      fields: {
        id: 'id',
        name: 'name',
        order: 'order',
        icon: 'icon'
      }
    }
  }
};
