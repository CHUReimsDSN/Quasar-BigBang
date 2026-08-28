import { type TPrimaryLabel } from "../core/primary";
import { type TSurfaceLabel } from "../core/surface";
import { type TSaveStrategy } from "../core/saver";
/**
 * Injected class for managing theme
 * Shall be used in components by using the 'inject' method from vue
 */
export declare class BigBangTheme {
    private _primary;
    private _surface;
    private _saveStrategy;
    /**
     * Don't instanciate outside of the extension
     */
    constructor();
    /**
     * Set the primary color for the entire app.
     * This function calls the trySaveTheme() method.
     *
     * @param primaryLabel Label of the primary color
     */
    setPrimary(primaryLabel: TPrimaryLabel): void;
    /**
     * Get current primary label
     */
    getPrimary(): TPrimaryLabel;
    /**
     * Set the primary color for the entire app.
     * This function calls the trySaveTheme() method.
     *
     * @param surfaceLabel Label of the surface color
     */
    setSurface(surfaceLabel: TSurfaceLabel): void;
    /**
     * Get current surface label
     */
    getSurface(): TSurfaceLabel;
    /**
     * Set save mode
     *
     * @param strategy Strategy for the save mode
     */
    setSaveMode(strategy: TSaveStrategy): void;
    /**
     * Try to save the theme depending on the save mode
     * If save mode is set to 'none', this will do nothing
     */
    trySaveTheme(): boolean;
    /**
     * Try to load the theme depending on the save mode
     * If the save mode is set to 'none', this will do nothing
     * If the load result is empty, the theme will be set with the default primary and surface colors
     */
    tryLoadTheme(): boolean;
    /**
     * Get the current save strategy
     */
    getSaveMode(): TSaveStrategy;
}
