import { createFileRoute } from '@tanstack/react-router'
import { SouthAmericaPage } from '../../features/countries/SouthAmericaPage';

export const Route = createFileRoute('/countries/south-america')({
  component: () => <SouthAmericaPage />
})
