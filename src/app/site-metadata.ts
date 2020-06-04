import { MatAdministrationMetadata, EntityFieldType, EntityFieldInputType } from '@weblauncher/material-administration';

export const SiteMetadata: MatAdministrationMetadata = {
  entities: {
    news: {
      single: 'news',
      plural: 'news',
      autoTimestamps: true,
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
      entities: {
        images: {
          single: 'image',
          plural: 'images',
          autoTimestamps: true,
          fields: {
            id: {
              hideInList: true
            },
            title: 'title',
            imageUrl: {
              label: 'Image',
              inputType: EntityFieldInputType.Image,
              format: 'image',
              filePathField: 'imageUrlPath'
            },
            created: {
              showInList: true
            }
          }
        },
        comments: {
          single: 'comment',
          plural: 'comments',
          autoTimestamps: true,
          fields: {
            id: {
              hideInList: true
            },
            title: 'title',
            content: 'content',
            created: {
              showInList: true
            }
          }
        }
      }
    },
    events: {
      single: 'event',
      plural: 'events',
      showMenuDividerAfter: true,
      autoTimestamps: true,
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
        description: {
          hideInList: true,
          inputType: EntityFieldInputType.Ckeditor
        },
        start: {
          type: EntityFieldType.Timestamp,
          inputType: 'datepicker',
          showInList: true
        },
        end: {
          type: EntityFieldType.Timestamp,
          inputType: 'datepicker',
          showInList: true
        },
        created: {
          showInList: true
        }
      }
    },
    users: {
      single: 'user',
      plural: 'users',
      titleField: 'email',
      fields: {
        email: 'email',
        displayName: 'displayName'
      }
    },
    sports: {
      single: 'sport',
      plural: 'sports',
      hideList: true,
      fields: {
        name: 'name',
        order: 'order',
        icon: 'icon'
      }
    }
  }
};
