<script>
  import { Page, Block, List, ListItem } from "framework7-svelte";

  export let user;
</script>

<Page>
  <Block strong inset>
    {user.about}
  </Block>
  <List strong inset dividersIos>
    {#each user.links as link}
      <ListItem link={link.url} title={link.title} external target="_blank" />
    {/each}
  </List>
</Page>
