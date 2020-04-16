export const SiteMetadata = {
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
          type: 'select',
          select: {
            type: 'collection',
            collection: 'sports',
            collectionValue: 'id',
            collectionLabel: 'name'
          }
        },
        title: 'title',
        content: {
          hideInList: true,
          type: 'html'
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
        sport: 'sport',
        title: 'title',
        description: {
          hideInList: true,
          type: 'html'
        },
        start: {
          type: 'timestamp'
        },
        end: {
          type: 'timestamp'
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
