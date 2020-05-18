import { ListComponent, AddComponent, UpdateComponent } from './components';
export const materialAdministrationRoutes = [
    {
        path: ':collection/list',
        component: ListComponent
    },
    {
        path: ':collection/add',
        component: AddComponent
    },
    {
        path: ':collection/update/:id',
        component: UpdateComponent
    },
    {
        path: ':collection',
        redirectTo: ':collection/list'
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24ucm91dGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24vIiwic291cmNlcyI6WyJsaWIvbWF0ZXJpYWwtYWRtaW5pc3RyYXRpb24ucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU1RSxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBVztJQUNsRDtRQUNFLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsU0FBUyxFQUFFLGFBQWE7S0FDekI7SUFDRDtRQUNFLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsU0FBUyxFQUFFLFlBQVk7S0FDeEI7SUFDRDtRQUNFLElBQUksRUFBRSx3QkFBd0I7UUFDOUIsU0FBUyxFQUFFLGVBQWU7S0FDM0I7SUFDRDtRQUNFLElBQUksRUFBRSxhQUFhO1FBQ25CLFVBQVUsRUFBRSxrQkFBa0I7S0FDL0I7Q0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTGlzdENvbXBvbmVudCwgQWRkQ29tcG9uZW50LCBVcGRhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGVyaWFsQWRtaW5pc3RyYXRpb25Sb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnOmNvbGxlY3Rpb24vbGlzdCcsXHJcbiAgICBjb21wb25lbnQ6IExpc3RDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICc6Y29sbGVjdGlvbi9hZGQnLFxyXG4gICAgY29tcG9uZW50OiBBZGRDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICc6Y29sbGVjdGlvbi91cGRhdGUvOmlkJyxcclxuICAgIGNvbXBvbmVudDogVXBkYXRlQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnOmNvbGxlY3Rpb24nLFxyXG4gICAgcmVkaXJlY3RUbzogJzpjb2xsZWN0aW9uL2xpc3QnXHJcbiAgfV07XHJcbiJdfQ==