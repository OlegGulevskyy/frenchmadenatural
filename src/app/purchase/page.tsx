import { ProtectedRoute } from "@/components/protected-route";

export default function Purchase() {
  return (
    <ProtectedRoute withAuth>
      <div>
        <h1>Purchase</h1>
        Work in progress
      </div>
    </ProtectedRoute>
  );
}
