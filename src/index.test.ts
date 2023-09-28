import { test, expect, describe } from "bun:test";
import {
  maxCriticalTier,
  adjustedCriticalDamageChance,
  offensiveFactor,
  compareOffensiveFactor,
  nextCase,
  averageCasts,
} from "./index";

test("maxCriticalTier(1)", () => expect(maxCriticalTier(1)).toBe(1));
test("maxCriticalTier(50)", () => expect(maxCriticalTier(50)).toBe(1));
test("maxCriticalTier(99)", () => expect(maxCriticalTier(99)).toBe(1));
test("maxCriticalTier(100)", () => expect(maxCriticalTier(100)).toBe(1));
test("maxCriticalTier(101)", () => expect(maxCriticalTier(101)).toBe(2));
test("maxCriticalTier(150)", () => expect(maxCriticalTier(150)).toBe(2));
test("maxCriticalTier(199)", () => expect(maxCriticalTier(199)).toBe(2));
test("maxCriticalTier(200)", () => expect(maxCriticalTier(200)).toBe(2));
test("maxCriticalTier(201)", () => expect(maxCriticalTier(201)).toBe(3));

test("adjustedCriticalDamageChance(1)", () =>
  expect(adjustedCriticalDamageChance(1)).toBe(1));
test("adjustedCriticalDamageChance(50)", () =>
  expect(adjustedCriticalDamageChance(50)).toBe(50));
test("adjustedCriticalDamageChance(99)", () =>
  expect(adjustedCriticalDamageChance(99)).toBe(99));
test("adjustedCriticalDamageChance(100)", () =>
  expect(adjustedCriticalDamageChance(100)).toBe(100));
test("adjustedCriticalDamageChance(101)", () =>
  expect(adjustedCriticalDamageChance(101)).toBe(1));
test("adjustedCriticalDamageChance(150)", () =>
  expect(adjustedCriticalDamageChance(150)).toBe(50));
test("adjustedCriticalDamageChance(199)", () =>
  expect(adjustedCriticalDamageChance(199)).toBe(99));
test("adjustedCriticalDamageChance(200)", () =>
  expect(adjustedCriticalDamageChance(200)).toBe(100));
test("adjustedCriticalDamageChance(201)", () =>
  expect(adjustedCriticalDamageChance(201)).toBe(1));

test("averageCasts(0)", () => expect(averageCasts(0)).toBe(1));
test("averageCasts(10)", () => expect(averageCasts(10)).toBe(1.16));
test("averageCasts(100)", () => expect(averageCasts(100)).toBe(2.62));
test("averageCasts(200)", () => expect(averageCasts(200)).toBe(3.25));

describe("compareOffensiveFactor", () => {
  const baseCase = {
    damageModifier: 50,
    criticalDamageChance: 20,
    criticalDamageModifier: 250,
    castFrequencyModifier: 0,
    multiCastChance: 0,
  };

  test("POWERFUL_STRIKES | COMMON", () => {
    expect(
      compareOffensiveFactor(
        baseCase,
        nextCase(baseCase, "POWERFUL_STRIKES", "COMMON")
      )
    ).toBe(24);
  });
  test("POWERFUL_STRIKES | UNCOMMON", () => {
    expect(
      compareOffensiveFactor(
        baseCase,
        nextCase(baseCase, "POWERFUL_STRIKES", "UNCOMMON")
      )
    ).toBe(47);
  });
  test("POWERFUL_STRIKES | RARE", () => {
    expect(
      compareOffensiveFactor(
        baseCase,
        nextCase(baseCase, "POWERFUL_STRIKES", "RARE")
      )
    ).toBe(71);
  });

  test("LETHALITY | COMMON", () => {
    expect(
      compareOffensiveFactor(
        baseCase,
        nextCase(baseCase, "LETHALITY", "COMMON")
      )
    ).toBe(29);
  });
  test("LETHALITY | UNCOMMON", () => {
    expect(
      compareOffensiveFactor(
        baseCase,
        nextCase(baseCase, "LETHALITY", "UNCOMMON")
      )
    ).toBe(59);
  });
  test("LETHALITY | RARE", () => {
    expect(
      compareOffensiveFactor(baseCase, nextCase(baseCase, "LETHALITY", "RARE"))
    ).toBe(88);
  });

  test("MERCILESS | COMMON", () => {
    expect(
      compareOffensiveFactor(
        baseCase,
        nextCase(baseCase, "MERCILESS", "COMMON")
      )
    ).toBe(14);
  });
  test("MERCILESS | UNCOMMON", () => {
    expect(
      compareOffensiveFactor(
        baseCase,
        nextCase(baseCase, "MERCILESS", "UNCOMMON")
      )
    ).toBe(28);
  });
  test("MERCILESS | RARE", () => {
    expect(
      compareOffensiveFactor(baseCase, nextCase(baseCase, "MERCILESS", "RARE"))
    ).toBe(42);
  });
});
