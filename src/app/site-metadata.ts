import {
 MatAdministrationMetadata, EntityFieldType, EntityFieldInputType,
} from '@weblauncher/material-administration';

export const SiteMetadata: MatAdministrationMetadata = {
  entities: {
    news: {
      single: 'news',
      plural: 'news',
      icon: 'article',
      autoTimestamps: true,
      fields: {
        sport: {
          inputType: EntityFieldInputType.MultiCheckbox,
          optionsUseObjectValue: false,
          data: {
            type: 'entity',
            entity: 'sports',
            entityValue: 'id',
            entityLabel: 'name',
          },
        },
        title: {
          value: 'This is another article',
          validatorMessages: { required: 'This field is required' },
        },
        content: {
          hideInList: true,
          inputType: EntityFieldInputType.Ckeditor,
        },
        imageUrl: {
          label: 'Image',
          inputType: EntityFieldInputType.Image,
          format: 'image',
          filePathField: 'imageUrlPath',
          style: {
            list: { height: '100px' },
          },
        },
        created: {
          showInList: true,
        },
      },
      entities: {
        images: {
          single: 'image',
          plural: 'images',
          autoTimestamps: true,
          fields: {
            id: {
              hideInList: true,
            },
            title: 'title',
            imageUrl: {
              label: 'Image',
              inputType: EntityFieldInputType.Image,
              format: 'image',
              filePathField: 'imageUrlPath',
            },
            created: {
              showInList: true,
            },
          },
        },
        comments: {
          single: 'comment',
          plural: 'comments',
          autoTimestamps: true,
          fields: {
            id: {
              hideInList: true,
            },
            title: 'title',
            content: 'content',
            created: {
              showInList: true,
            },
          },
        },
      },
      layout: {
        form: {
          gap: '1rem',
          sections: [
            {
              title: 'Details',
              subtitle: 'Fill in details about the article',
              fields: ['title', 'sport'],
              layout: {
                direction: 'row',
                gap: '1rem',
              },
            },
            {
              title: 'Article',
              fields: ['content', 'imageUrl'],
            },
          ],
        },
      },
    },
    events: {
      single: 'event',
      plural: 'events',
      icon: 'event',
      showMenuDividerAfter: true,
      autoTimestamps: true,
      fields: {
        sport: {
          inputType: EntityFieldInputType.Select,
          data: {
            type: 'entity',
            entity: 'sports',
            entityValue: 'id',
            entityLabel: 'name',
          },
        },
        title: 'title',
        description: {
          hideInList: true,
          inputType: EntityFieldInputType.Ckeditor,
        },
        start: {
          type: EntityFieldType.Timestamp,
          inputType: 'datepicker',
          showInList: true,
        },
        end: {
          type: EntityFieldType.Timestamp,
          inputType: 'datepicker',
          showInList: true,
        },
        created: {
          showInList: true,
        },
      },
    },
    users: {
      single: 'user',
      plural: 'users',
      icon: 'people',
      titleField: 'email',
      fields: {
        email: 'email',
        displayName: 'displayName',
      },
    },
    sports: {
      single: 'sport',
      plural: 'sports',
      hideList: true,
      fields: {
        name: 'name',
        order: 'order',
        icon: 'icon',
      },
    },
  },
};
