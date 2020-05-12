export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebb22b7bbbe310173b365f2',
                  title: 'Sanity Studio',
                  name: 'preview-studio',
                  apiId: '6b785ecd-d9bc-461f-849c-27231d8491ee'
                },
                {
                  buildHookId: '5ebb22b7873ac092cdd060a5',
                  title: 'Blog Website',
                  name: 'preview-web',
                  apiId: '5005a8c8-f655-44c4-a470-21c3fb915275'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sharan7blue/preview',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://preview-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
