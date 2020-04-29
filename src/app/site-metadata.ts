import { MatAdministrationMetadata } from '@weblauncher/material-administration';

export const SiteMetadata: MatAdministrationMetadata = {
  timestampFormat: 'medium',
  entities: {
    news: {
      single: 'news',
      plural: 'news',
      createdTimestamp: 'created',
      updatedTimestamp: 'updated',
      fields: {
        id: 'id',
        sport: {
          inputType: 'select',
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
          inputType: 'ckeditor'
        },
        imageUrl: {
          label: 'Image',
          inputType: 'image',
          format: 'image',
          filePathField: 'imageUrlPath',
          style: {
            list: {
              height: '5rem',
              padding: '0.5rem'
            }
          }
        },
        created: {
          type: 'timestamp',
          hideInForm: true
        },
        updated: {
          type: 'timestamp',
          hideInForm: true
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
          inputType: 'select',
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
          inputType: 'ckeditor'
        },
        start: {
          type: 'timestamp',
          inputType: 'datepicker'
        },
        end: {
          type: 'timestamp',
          inputType: 'datepicker'
        },
        created: {
          type: 'timestamp',
          hideInForm: true
        },
        updated: {
          type: 'timestamp',
          hideInForm: true
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
