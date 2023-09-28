import { test, expect, describe } from "bun:test";
import {
  maxCriticalTier,
  adjustedCriticalDamageChance,
  offensiveFactor,
  compareOffensiveFactor,
  nextCase,
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

test("offensiveFactor(50, 20, 250)", () =>
  expect(offensiveFactor(50, 20, 250)).toBe(2833.3333333333335));
test("offensiveFactor(55, 20, 250)", () =>
  expect(offensiveFactor(55, 20, 250)).toBe(2900));

test("compareOffensiveFactor(50, 20, 250, 55, 20, 250)", () =>
  expect(
    compareOffensiveFactor(
      {
        damageModifier: 50,
        criticalDamageChance: 20,
        criticalDamageModifier: 250,
      },
      {
        damageModifier: 55,
        criticalDamageChance: 20,
        criticalDamageModifier: 250,
      }
    )
  ).toBe(24));

describe("compareOffensiveFactor", () => {
  const baseCase = {
    damageModifier: 50,
    criticalDamageChance: 20,
    criticalDamageModifier: 250,
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
