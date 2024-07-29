import { ProtectedRoute } from "@/components/protected-route";
import { Reservation } from "@/components/reservation";

export default async function Reserve() {
  return (
    <ProtectedRoute withAuth canPurchase>
      <Reservation />
    </ProtectedRoute>
  );
}
