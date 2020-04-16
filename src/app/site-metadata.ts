export const SiteMetadata = {
  entities: {
    news: {
      single: 'news',
      plural: 'news',
      fields: {
        id: 'id',
        sport: 'sport',
        title: 'title',
        content: {
          hideInList: true,
          type: 'html'
        },
        created: {
          type: 'timestamp'
        }
      }
    },
    events: {
      single: 'event',
      plural: 'events',
      showMenuDividerAfter: true,
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
        }
      }
    },
    users: {
      single: 'user',
      plural: 'users',
      fields: {
        id: 'id',
        email: 'email',
        displayName: 'displayName'
      }
    }
  }
};
