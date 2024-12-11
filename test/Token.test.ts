import { assertEquals } from "@std/assert"
import { Token } from "../models/Token.ts"

Deno.test("Token Invalidation", () => {
  const testToken = new Token("ABC", "TEST", 123)
  testToken.setExpirationTime(testToken.getRetrievalTime())

  assertEquals(testToken.isExpired(), true)
})
