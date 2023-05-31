import { Drawer } from "expo-router/drawer";

<Drawer>
    <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
        drawerLabel: "Home",
        title: "Principal",
     }}
/>
<Drawer.Screen
     name="user/[id]" // This is the name of the page and must match the url from root
    options={{
    drawerLabel: "TelaA",
    title: "TelaA",
  }}
/>

<Drawer.Screen
     name="TelaC" // This is the name of the page and must match the url from root
    options={{
    drawerLabel: "TelaC",
    title: "TelaC",
  }}
/>
<Drawer.Screen
     name="TelaC" // This is the name of the page and must match the url from root
    options={{
    drawerLabel: "TelaB",
    title: "TelaB",
  }}
/>
</Drawer>