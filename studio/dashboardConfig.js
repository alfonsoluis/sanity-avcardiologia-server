export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cdc74a7c4413c1cac2b0828',
                  title: 'Sanity Studio',
                  name: 'sanity-avcardiologia-server-studio',
                  apiId: 'd13add68-7e43-4aa2-a7ef-e74f170fd1ed'
                },
                {
                  buildHookId: '5cdc74a7dd0e5f29dcce2bc9',
                  title: 'Landing pages Website',
                  name: 'sanity-avcardiologia-server',
                  apiId: '6ef410ba-143f-41bc-8151-6013beb3533b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alfonsoluis/sanity-avcardiologia-server',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-avcardiologia-server.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
